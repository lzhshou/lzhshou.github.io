
## To update the site:

0. Install prerequisite: ``mkdocs`` packages using [pip](https://pip.pypa.io/en/stable/installing/) or [pip3](https://pip.pypa.io/en/stable/installing/).
  
```bash
pip3 install mkdocs
pip3 install mkdocs-bootswatch
pip3 install pymdown-extensions
pip3 install attr
pip3 install mkdocs-bibtex
pip3 install mkdocs-video
```
          
1. Make changes in ``docs/``. If a new page are added, please index this page in the ``nav`` section of ``mkdocs.yml`` in the root directory, otherwise the new added page will not be rendered.

2. Preview or review the site by running the following command in a terminal, and then visit http://127.0.0.1:8000 in a browser.
      
```bash
mkdocs serve
```
      
3. Update the remote site using

```bash
mkdocs gh-deploy
```

4. Push the change of site source to remote using 

```bash
git add .
git commit -m [message]
git push
```

## Tips

- mkdocs does not support ``http``, please make sure the web links are starting with ``https``. For example, the videl links copied from ``tecent cloud`` are starting with ``http`` by default, which could result in no response when using ``http`` links in the ``Animations`` page.
