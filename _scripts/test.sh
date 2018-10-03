#!/bin/bash

echo "Proofing the HTML"

timeout 120s bundle exec htmlproofer _site --url-ignore "/miltonolaf.com|github.com/" --only-4xx --http-status-ignore "403" --check-html --check-favicon
