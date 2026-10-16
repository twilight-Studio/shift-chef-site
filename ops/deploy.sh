#!/usr/bin/env bash
set -Eeuo pipefail

APP_ROOT="/var/www/shiftchef"
RELEASE_ID="${1:-}"

if [[ ! "$RELEASE_ID" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Usage: $0 <40-character git SHA>" >&2
  exit 2
fi

ARCHIVE="$APP_ROOT/incoming/$RELEASE_ID.tar.gz"
RELEASE_DIR="$APP_ROOT/releases/$RELEASE_ID"

if [[ ! -f "$ARCHIVE" ]]; then
  echo "Release archive not found: $ARCHIVE" >&2
  exit 1
fi

if [[ ! -d "$RELEASE_DIR" ]]; then
  mkdir -p "$RELEASE_DIR"
  tar -xzf "$ARCHIVE" -C "$RELEASE_DIR"
fi

if [[ ! -f "$RELEASE_DIR/server.js" || ! -f "$RELEASE_DIR/ecosystem.config.cjs" ]]; then
  echo "Release is missing server.js or ecosystem.config.cjs" >&2
  exit 1
fi

ln -sfn "$RELEASE_DIR" "$APP_ROOT/current"

if pm2 describe shiftchef >/dev/null 2>&1; then
  pm2 reload shiftchef --update-env
else
  pm2 start "$APP_ROOT/current/ecosystem.config.cjs"
fi

pm2 save
rm -f "$ARCHIVE"

# Keep the current release plus the four most recent older releases.
find "$APP_ROOT/releases" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' \
  | sort -nr \
  | tail -n +6 \
  | cut -d' ' -f2- \
  | xargs -r rm -rf --

echo "Deployed $RELEASE_ID"
