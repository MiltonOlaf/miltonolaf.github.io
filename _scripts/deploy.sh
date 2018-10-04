#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  cd _site
  git init

  git remote add deploy "deploy@104.248.70.250:/www/var/miltonolaf.com"
  git config user.name "Travis CI"
  git config user.email "olafmilton+travis@gmail.com"

  git add .
  git commit -m "Deploy"
  git push --force deploy master
else
  echo "Not deploying, since this branch isn't master."
fi
