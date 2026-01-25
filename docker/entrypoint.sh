#!/bin/bash
set -eu

# Start backend
echo 'start backend...'
'/usr/local/bin/genesis' start &
BACKEND_PID=$!

# Start Caddy in the background
echo 'start caddy...'
caddy run --config /etc/caddy/Caddyfile &
CADDY_PID=$!

echo 'set up terminate block...'
terminate() {
  SIGNAL=$1

  if [ -n "${BACKEND_PID:-}" ]; then
    kill -s "$SIGNAL" "$BACKEND_PID" 2>/dev/null || true
  fi
  if [ -n "${CADDY_PID:-}" ]; then
    kill -s "$SIGNAL" "$CADDY_PID" 2>/dev/null || true
  fi
}

echo 'set up traps...'
trap 'terminate TERM' TERM
trap 'terminate INT' INT

# Wait for both processes to exit
echo 'wait for processes...'
wait "$BACKEND_PID"
wait "$CADDY_PID"
