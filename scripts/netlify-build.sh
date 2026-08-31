#!/usr/bin/env bash
# Netlify build: download the exact Hugo binary and build the site.
# Netlify's current build system (mise) cannot install Hugo this old:
# it only knows the "extended" variant, which does not exist for 0.30.x.
set -euo pipefail

HUGO_BIN_VERSION="0.30.2"

curl -sSL -o /tmp/hugo.tgz "https://github.com/gohugoio/hugo/releases/download/v${HUGO_BIN_VERSION}/hugo_${HUGO_BIN_VERSION}_Linux-64bit.tar.gz"
tar -xzf /tmp/hugo.tgz -C /tmp hugo
/tmp/hugo version

/tmp/hugo -s site -d ../dist "$@"
