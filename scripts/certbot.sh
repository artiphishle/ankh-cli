#!/bin/bash

sudo certbot certonly \
  --manual \
  --preferred-challenges dns
  --email $1 \
  --server https://acme-v02.api.letsencrypt.org/directory \
  --agree-tos -d $2;

exit 0;
