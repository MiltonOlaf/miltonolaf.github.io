#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    cd _site
    git init

    git remote add deploy "deploy@104.248.70.250:/var/www/miltonolaf.com"
    git config user.name "Travis CI"
    git config user.email "olafmilton+travisCI@gmail.com"

    git add .
    git commit -m "Deploy"
    git push --force deploy master
else
    echo "Not deploying, since this branch isn't master."
fi
