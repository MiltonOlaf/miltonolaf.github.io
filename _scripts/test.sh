#!/bin/bash
set -x

bundle exec htmlproofer _site --only-4xx --external_only --check-html --check-favicon --allow-hash-href --http-status-ignore 429
