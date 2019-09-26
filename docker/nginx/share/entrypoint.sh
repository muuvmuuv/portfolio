#!/usr/bin/env sh
set -eu

mkdir -p \
  "/var/cache/nginx" \
  "/var/www"

# Check NGINX configuration
sh /usr/share/nginx-check.sh

exec "$@"
