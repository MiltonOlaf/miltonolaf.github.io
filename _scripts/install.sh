#!/bin/bash
set -x

openssl aes-256-cbc -K $encrypted_de3305321ced_key -iv $encrypted_de3305321ced_iv -in deploy-key.enc -out deploy-key -d
rm deploy-key.enc
chmod 600 deploy-key
mv deploy-key ~/.ssh/id_rsa
