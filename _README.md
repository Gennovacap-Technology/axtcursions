README
========

How to run the server locally:
cd ~/docs/clients/thehostelshuttle/site/thehostelshuttle-jekyll
jekyll serve --watch --port 4001

How to deploy:
(remember to run jekyll locally to build the site before deploying)

cd ~/docs/clients/thehostelshuttle/site/thehostelshuttle-jekyll

rsync -avz /Users/halph/docs/clients/thehostelshuttle/site/thehostelshuttle-jekyll/_site/ jesse@atxcursions.com:/home/jesse/public_html/atxcursions.com/httpdocs/
