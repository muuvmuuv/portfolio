#!/usr/bin/env sh

set -e

if ! nginx -t; then
  exit 1
fi
