#!/usr/bin/env bash
set -euo pipefail
echo "Copying sitemap to build output..."

SRC="public/sitemap.xml"
DST="dist/portofolio/browser/sitemap.xml"

if [ ! -f "$SRC" ]; then
	echo "Error: $SRC not found." >&2
	exit 2
fi

mkdir -p "$(dirname "$DST")"
cp "$SRC" "$DST"
echo "Sitemap copied successfully to $DST"