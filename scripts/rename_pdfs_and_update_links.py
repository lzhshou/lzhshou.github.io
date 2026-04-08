#!/usr/bin/env python3
from __future__ import annotations

import argparse
import os
import re
import sys
import unicodedata
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List, Tuple
from urllib.parse import quote, unquote


RE_MD_PDF_LINK = re.compile(r"\]\(/pdf/([^)]+)\)")


def _slugify_ascii(text: str) -> str:
    # Keep it stable and filesystem/url friendly.
    text = unicodedata.normalize("NFKD", text)
    text = text.replace("–", "-").replace("—", "-").replace("‐", "-")
    text = text.replace("’", "").replace("“", "").replace("”", "")
    text = text.replace("·", "-")
    text = text.strip()
    text = re.sub(r"\s+", " ", text)
    text = text.replace(" ", "_").replace("-", "_")
    text = re.sub(r"[^A-Za-z0-9_]+", "", text)
    text = re.sub(r"_+", "_", text).strip("_")
    return text.lower()


def _short_pdf_name(stem: str) -> str:
    """
    Convert a raw filename stem to a short, readable, stable ASCII name.
    """
    # Special cases for known non-ascii leading author names.
    special = {
        "吴2022 基于球面沃罗诺伊的颗粒表面离散与重构方法": "Wu2022_spherical_voronoi_reconstruction_zh",
        "黄2020 考虑形态及含水率的颗粒材料尺寸效应室内三轴试验研究": "Huang2020_size_effect_morphology_moisture_zh",
    }
    if stem in special:
        return special[stem]

    # If it already looks good, keep it.
    if re.fullmatch(r"[A-Za-z]+[0-9]{4}_[A-Za-z0-9_]{6,}", stem):
        return stem

    # Try to preserve "AuthorYYYY" prefix if present.
    m = re.match(r"^([A-Za-z]+)(\d{4})\s+(.*)$", stem)
    if m:
        author, year, rest = m.group(1), m.group(2), m.group(3)
        rest_slug = _slugify_ascii(rest)
        parts = [f"{author}{year}"]
        if rest_slug:
            parts.append(rest_slug)
        out = "_".join(parts)
    else:
        out = _slugify_ascii(stem)
        if not out:
            out = "paper"

    # Keep it short but still readable.
    if len(out) > 72:
        parts = out.split("_")
        acc: List[str] = []
        for part in parts:
            if not part:
                continue
            candidate = "_".join(acc + [part]) if acc else part
            if len(candidate) > 72:
                break
            acc.append(part)
        out = "_".join(acc).rstrip("_")
        if not out:
            out = parts[0][:72].rstrip("_")
    return out


@dataclass(frozen=True)
class RenameItem:
    old_rel: str  # under static/pdf
    new_rel: str  # under static/pdf


def _iter_pdf_files(static_pdf_dir: Path) -> Iterable[Path]:
    for p in static_pdf_dir.rglob("*.pdf"):
        if p.is_file():
            yield p


def _propose_renames(static_pdf_dir: Path) -> List[RenameItem]:
    existing: Dict[str, Path] = {}
    for p in _iter_pdf_files(static_pdf_dir):
        rel = str(p.relative_to(static_pdf_dir)).replace(os.sep, "/")
        existing[rel] = p

    used_names: Dict[Tuple[str, str], int] = {}
    items: List[RenameItem] = []

    for rel, p in sorted(existing.items(), key=lambda x: x[0].lower()):
        dir_rel = str(p.parent.relative_to(static_pdf_dir)).replace(os.sep, "/")
        stem = p.stem
        base = _short_pdf_name(stem)
        candidate = base
        key = (dir_rel, candidate)
        idx = used_names.get(key, 0)
        while True:
            final = f"{candidate}.pdf"
            new_rel = f"{dir_rel}/{final}" if dir_rel != "." else final
            if new_rel == rel:
                break
            if new_rel not in existing and (new_rel not in {i.new_rel for i in items}):
                break
            idx += 1
            candidate = f"{base}_{idx}"
            key = (dir_rel, candidate)
        used_names[(dir_rel, candidate)] = idx

        if new_rel != rel:
            items.append(RenameItem(old_rel=rel, new_rel=new_rel))

    return items


def _collect_md_files(repo_root: Path) -> List[Path]:
    out: List[Path] = []
    for p in repo_root.rglob("*.md"):
        if p.is_file():
            out.append(p)
    for p in repo_root.rglob("*.mdx"):
        if p.is_file():
            out.append(p)
    return out


def _build_link_replacements(items: List[RenameItem]) -> Dict[str, str]:
    """
    Return replacements for both raw and percent-encoded old paths.
    Keys/values include the leading /pdf/.
    """
    repl: Dict[str, str] = {}
    for it in items:
        old_path = f"/pdf/{it.old_rel}"
        new_path = f"/pdf/{it.new_rel}"
        repl[old_path] = new_path

        # Some docs use %20 etc. Generate a canonical encoded form.
        repl[quote(old_path, safe="/%._-")] = new_path

        # Also handle cases where only spaces are encoded but other chars left as-is.
        repl[old_path.replace(" ", "%20")] = new_path
    return repl


def _update_markdown_links(md_path: Path, replacements: Dict[str, str]) -> bool:
    s = md_path.read_text(encoding="utf-8")
    changed = False

    # Fast path: direct string replacement for known variants.
    for old, new in replacements.items():
        if old in s:
            s = s.replace(old, new)
            changed = True

    # Robust path: decode link target and remap if matched.
    def _sub(m: re.Match[str]) -> str:
        nonlocal changed
        target = m.group(1)
        decoded = unquote(target)
        full = f"/pdf/{decoded}" if not decoded.startswith("/pdf/") else decoded
        if full in replacements:
            new_full = replacements[full]
            new_target = new_full[len("/pdf/") :]
            changed = True
            return f"]({new_full})".replace("](", "](")  # keep bracket/paren formatting stable
        return m.group(0)

    s2 = RE_MD_PDF_LINK.sub(_sub, s)
    if s2 != s:
        s = s2
        changed = True

    if changed:
        md_path.write_text(s, encoding="utf-8")
    return changed


def _apply_renames(static_pdf_dir: Path, items: List[RenameItem], dry_run: bool) -> None:
    for it in items:
        src = static_pdf_dir / Path(it.old_rel)
        dst = static_pdf_dir / Path(it.new_rel)
        if dry_run:
            print(f"RENAME  {it.old_rel}  ->  {it.new_rel}")
            continue
        dst.parent.mkdir(parents=True, exist_ok=True)
        src.rename(dst)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo-root", default=".", help="Repository root directory")
    ap.add_argument("--dry-run", action="store_true", help="Print changes without writing")
    args = ap.parse_args()

    repo_root = Path(args.repo_root).resolve()
    static_pdf_dir = repo_root / "static" / "pdf"
    if not static_pdf_dir.exists():
        print(f"ERROR: missing directory: {static_pdf_dir}", file=sys.stderr)
        return 2

    items = _propose_renames(static_pdf_dir)
    if not items:
        print("No PDF files need renaming.")
        return 0

    replacements = _build_link_replacements(items)

    if args.dry_run:
        print(f"Planned renames: {len(items)}")
        _apply_renames(static_pdf_dir, items, dry_run=True)
        return 0

    _apply_renames(static_pdf_dir, items, dry_run=False)

    changed_files = 0
    for md in _collect_md_files(repo_root):
        if _update_markdown_links(md, replacements):
            changed_files += 1

    print(f"Renamed PDFs: {len(items)}")
    print(f"Updated markdown files: {changed_files}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

