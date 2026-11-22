#!/bin/bash
# Copie l'application web (dossier parent) dans www/ pour Capacitor
set -e
SRC="$(cd "$(dirname "$0")/.." && pwd)"
DST="$(cd "$(dirname "$0")" && pwd)/www"
mkdir -p "$DST"
for f in index.html styles.css app.js manifest.json sw.js icon.svg icon-192.png icon-512.png; do
  cp "$SRC/$f" "$DST/$f"
done
echo "✓ Assets copiés dans $DST"
