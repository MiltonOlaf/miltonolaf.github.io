#!/bin/bash
set -x

cd _site
git init

git remote add deploy "ssh://deploy@104.248.70.250:/var/www/miltonolaf.com"
git config user.name "Travis CI"
git config user.email "olafmilton+travisCI@gmail.com"

git add .
git commit -m "Deploy"
git push --force deploy master
