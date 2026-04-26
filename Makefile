PREFIX ?= $(HOME)/.local
BINDIR = $(PREFIX)/bin
ZSH_COMPLETIONSDIR = $(BINDIR)/completions
BASH_COMPLETIONSDIR = $(BINDIR)/completions

INSTALL = install
INSTALL_PROGRAM = $(INSTALL) -m 755
INSTALL_DATA = $(INSTALL) -m 644
RM = rm -f

.PHONY: all build install uninstall

all:
	@echo "Run 'make build' to build the site"
	@echo "Run 'make install' to install to $(PREFIX)"
	@echo "Run 'make uninstall' to remove from $(PREFIX)"

build:
	@command -v mywebpage >/dev/null 2>&1 && mywebpage build || npm run build

install:
	@echo "Installing binaries to $(BINDIR)..."
	@mkdir -p $(BINDIR)
	@sed 's|^ROOT=.*|ROOT="$${MYWEBPAGE_ROOT:-$(shell pwd)}"|' bin/mywebpage > $(BINDIR)/mywebpage
	@chmod 755 $(BINDIR)/mywebpage
	@echo "Installing zsh completions to $(ZSH_COMPLETIONSDIR)..."
	@mkdir -p $(ZSH_COMPLETIONSDIR)
	$(INSTALL_DATA) bin/completions/_mywebpage $(ZSH_COMPLETIONSDIR)/
	@echo "Installing bash completions to $(BASH_COMPLETIONSDIR)..."
	@mkdir -p $(BASH_COMPLETIONSDIR)
	$(INSTALL_DATA) bin/completions/mywebpage.bash $(BASH_COMPLETIONSDIR)/mywebpage
	@echo "Installation complete."
	@echo "Make sure $(BINDIR) is in your PATH."
	@echo "For zsh: add 'fpath=($(ZSH_COMPLETIONSDIR) \$$fpath)' before compinit"
	@echo "For bash: add 'source $(BASH_COMPLETIONSDIR)/mywebpage' to ~/.bashrc"

uninstall:
	@echo "Removing binaries from $(BINDIR)..."
	$(RM) $(BINDIR)/mywebpage
	@echo "Removing zsh completions from $(ZSH_COMPLETIONSDIR)..."
	$(RM) $(ZSH_COMPLETIONSDIR)/_mywebpage
	@rmdir $(ZSH_COMPLETIONSDIR) 2>/dev/null || true
	@echo "Removing bash completions from $(BASH_COMPLETIONSDIR)..."
	$(RM) $(BASH_COMPLETIONSDIR)/mywebpage
	@rmdir $(BASH_COMPLETIONSDIR) 2>/dev/null || true
	@echo "Uninstall complete."
