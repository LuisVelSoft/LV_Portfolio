#!/usr/bin/env sh
set -e

# Default to 80 if PORT not provided and export it for envsubst
: "${PORT:=80}"
export PORT

# If template exists, substitute and write final config
if [ -f /etc/nginx/templates/default.conf.template ]; then
  envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf
fi

exec "$@"
