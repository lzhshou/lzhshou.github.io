#!/usr/bin/env python3
"""
Export mywebpage docs to a single PDF.

Usage:
    cd mywebpage && python scripts/export-docs-pdf.py
    cd mywebpage && python scripts/export-docs-pdf.py -o static/pdf/apaam-lab-docs-zh.pdf

Requirements:
    - ~/workspace/templates/md-to-pdf/
    - pandoc
    - typst

Pipeline: merge .md → pandoc (md→typst) → typst compile → PDF
"""

import argparse
import re
import subprocess
import sys
import tempfile
import uuid
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))
import pdf_doc_order  # noqa: E402


def get_project_root() -> Path:
    return Path(__file__).resolve().parent.parent


def get_templates_dir() -> Path:
    return Path.home() / "workspace" / "templates" / "md-to-pdf"


def parse_frontmatter_title(content: str) -> str | None:
    m = re.match(r"^---\s*\n(.*?)---\s*\n", content, re.DOTALL)
    if not m:
        return None
    fm = m.group(1)
    title_m = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', fm, re.MULTILINE)
    if title_m:
        return title_m.group(1).strip().strip('"\'')
    return None


def merge_markdown(files: list[Path], project_root: Path) -> str:
    parts: list[str] = []

    for f in files:
        content = f.read_text(encoding="utf-8")
        content = re.sub(r"^---\s*\n.*?---\s*\n", "", content, count=1, flags=re.DOTALL)

        def fix_abs_img(m: re.Match) -> str:
            alt = m.group(1)
            rest = m.group(2)
            path_match = re.match(r"(/[^\s\"\)]+)", rest)
            if path_match:
                path = path_match.group(1)
                abs_path = project_root / "static" / path.lstrip("/")
                rest = rest.replace(path, str(abs_path), 1)
            return f"![{alt}]({rest})"

        content = re.sub(r"!\[(.*?)\]\((/[^\)]+)\)", fix_abs_img, content)
        content = re.sub(
            r"!\[(.*?)\]\((?!http)(?!file://)(?!/)([^\s\)]+)\)",
            lambda m: f"![{m.group(1)}]({f.parent / m.group(2)})",
            content,
        )

        parts.append(content.strip())
        parts.append("\n\n")

    return "\n\n".join(parts)


def build_pdf(
    merged_md: str,
    output: Path,
    title: str | None,
    subtitle: str | None,
    date: str | None,
) -> None:
    templates_dir = get_templates_dir()
    template_file = templates_dir / "manual" / "template.typ"
    if not template_file.exists():
        print(f"Template not found: {template_file}", file=sys.stderr)
        sys.exit(1)

    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".md", encoding="utf-8", delete=False
    ) as f:
        f.write(merged_md)
        tmp_md = Path(f.name)

    try:
        result = subprocess.run(
            ["pandoc", "-f", "markdown-citations", "-t", "typst", str(tmp_md)],
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            print("pandoc failed:", file=sys.stderr)
            print(result.stderr, file=sys.stderr)
            sys.exit(1)

        typ_body = result.stdout.replace("#horizontalrule", "#line(length: 100%)")
        typ_body = typ_body.replace("#table(", "#three-line-table(")

        params: list[str] = []
        if title is not None:
            params.append(f'title: "{title}"')
        if subtitle is not None:
            params.append(f'subtitle: "{subtitle}"')
        if date is not None:
            params.append(f'date: "{date}"')
        param_str = ", ".join(params)

        tmp_name = f".{uuid.uuid4().hex}.typ"
        tmp_typ = templates_dir / tmp_name
        rel_template = "manual/template.typ"

        with open(tmp_typ, "w", encoding="utf-8") as f:
            f.write(f'#import "{rel_template}": manual, three-line-table\n\n')
            if param_str:
                f.write(f"#show: manual.with({param_str})\n\n")
            else:
                f.write(f"#show: manual.with()\n\n")
            f.write(typ_body)

        try:
            output.parent.mkdir(parents=True, exist_ok=True)
            result = subprocess.run(
                ["typst", "compile", "--root", "/", tmp_name, str(output)],
                capture_output=True,
                text=True,
                cwd=str(templates_dir),
            )
            if result.returncode != 0:
                print("typst failed:", file=sys.stderr)
                print(result.stderr, file=sys.stderr)
                sys.exit(1)
            print(f"PDF generated: {output}")
        finally:
            tmp_typ.unlink(missing_ok=True)
    finally:
        tmp_md.unlink(missing_ok=True)


def resolve_lang_dir(project_root: Path, lang: str) -> Path:
    if lang == "zh":
        return project_root / "docs"
    elif lang == "en":
        return project_root / pdf_doc_order.EN_DOCS_REL
    else:
        raise ValueError(f"Unsupported lang: {lang}")


def build_pdf_for_lang(
    project_root: Path,
    lang: str,
    output: Path,
    title: str | None,
    subtitle: str | None,
    date: str | None,
) -> str | None:
    docs_dir = resolve_lang_dir(project_root, lang)
    if not docs_dir.exists():
        print(f"Docs directory not found: {docs_dir}", file=sys.stderr)
        return None

    if lang == "en":
        files = pdf_doc_order.ordered_paths_for_combined_docs_pdf_en(project_root)
    else:
        files = pdf_doc_order.ordered_paths_for_combined_docs_pdf(project_root)

    if not files:
        print(f"No markdown files found for {lang}.", file=sys.stderr)
        return None

    resolved_title = title
    if resolved_title is None:
        first_content = files[0].read_text(encoding="utf-8")
        resolved_title = parse_frontmatter_title(first_content)
    if resolved_title is None:
        resolved_title = "APAAM Lab Documentation"

    resolved_date = date
    if resolved_date is None:
        from datetime import date as dt
        resolved_date = dt.today().strftime("%Y-%m-%d")

    print(f"[{lang}] Collecting {len(files)} markdown files...")
    merged = merge_markdown(files, project_root)
    output_path = project_root / output
    build_pdf(merged, output_path, resolved_title, subtitle, resolved_date)
    return str(output_path)


DEFAULT_OUTPUT = "static/pdf/apaam-lab-docs-zh.pdf"


def en_output_path(output: str) -> str:
    """Replace `-zh` suffix with `-en`, or append `-en` if no `-zh` suffix."""
    p = Path(output)
    stem = p.stem
    if stem.endswith("-zh"):
        stem = stem[:-3] + "-en"
    else:
        stem = stem + "-en"
    return str(p.parent / f"{stem}{p.suffix}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Export mywebpage docs to PDF")
    parser.add_argument(
        "--output", "-o",
        default=DEFAULT_OUTPUT,
        help=f"Output PDF path (default: {DEFAULT_OUTPUT})",
    )
    parser.add_argument(
        "--title", "-t",
        default=None,
        help="Cover page title (default: extracted from first doc frontmatter)",
    )
    parser.add_argument(
        "--subtitle", "-s",
        default=None,
        help="Cover page subtitle",
    )
    parser.add_argument(
        "--date", "-d",
        default=None,
        help="Cover page date (default: today)",
    )
    parser.add_argument(
        "--lang", "-l",
        default="zh",
        choices=["zh", "en", "both"],
        help="Language: zh (Chinese), en (English), both (default: zh)",
    )
    args = parser.parse_args()

    project_root = get_project_root()

    if args.lang == "both":
        zh_output = args.output
        en_output = en_output_path(args.output)
        build_pdf_for_lang(
            project_root, "zh", Path(zh_output), args.title, args.subtitle, args.date
        )
        build_pdf_for_lang(
            project_root, "en", Path(en_output), args.title, args.subtitle, args.date
        )
    elif args.lang == "en":
        output = en_output_path(args.output)
        build_pdf_for_lang(
            project_root, "en", Path(output), args.title, args.subtitle, args.date
        )
    else:
        build_pdf_for_lang(
            project_root,
            "zh",
            Path(args.output),
            args.title,
            args.subtitle,
            args.date,
        )


if __name__ == "__main__":
    main()
