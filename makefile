local:
	mkdocs serve

cv:
	R < scripts/build_cv.R --no-save

deploy:
	mkdocs gh-deploy

.PHONY: local cv publish 



