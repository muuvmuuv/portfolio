#!/usr/bin/env sh

set -e

sh /usr/share/nginx-check.sh

nginx -s reload
