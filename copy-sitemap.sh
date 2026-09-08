#!/usr/bin/env bash
set -euo pipefail
echo "Copying sitemap and API to build output..."

SRC_SITEMAP="public/sitemap.xml"
DST_SITEMAP="dist/portofolio/browser/sitemap.xml"
SRC_API="api"
DST_API="dist/portofolio/browser/api"

if [ ! -f "$SRC_SITEMAP" ]; then
	echo "Error: $SRC_SITEMAP not found." >&2
	exit 2
fi

mkdir -p "$(dirname "$DST_SITEMAP")"
cp "$SRC_SITEMAP" "$DST_SITEMAP"
echo "Sitemap copied successfully to $DST_SITEMAP"

mkdir -p "$DST_API"
cp -r "$SRC_API"/* "$DST_API/"
echo "API copied successfully to $DST_API"