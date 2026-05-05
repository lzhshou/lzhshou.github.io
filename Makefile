.PHONY: all build pdf

all:
	@echo "Run 'make build' to build the site"
	@echo "Run 'make pdf' to export docs to PDF"

clear:
	npm run clear

build: clear
	npm run build

pdf:
	python3 scripts/export-docs-pdf.py
