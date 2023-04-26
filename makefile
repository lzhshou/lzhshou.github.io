local:
	mkdocs serve

cv:
	R < scripts/build_cv.R --no-save

publish:
	mkdocs gh-deploy

.PHONY: local cv publish 



