#!/usr/bin/env bash
# Encode one source clip into web-ready files for the site.
# Usage: scripts/encode-media.sh <input.mp4> <output-name> [width]
# Writes public/media/<name>.mp4 (H.264), <name>.webm (VP9) and <name>.jpg (poster).
set -euo pipefail
in="$1"; name="$2"; width="${3:-960}"
out="$(dirname "$0")/../public/media"
mkdir -p "$out"
vf="scale='min($width,iw)':-2:flags=lanczos,fps=30"
ffmpeg -nostdin -v error -y -i "$in" -an -vf "$vf" -c:v libx264 -preset slow -crf 26 \
  -pix_fmt yuv420p -profile:v high -movflags +faststart "$out/$name.mp4"
ffmpeg -nostdin -v error -y -i "$in" -an -vf "$vf" -c:v libvpx-vp9 -crf 37 -b:v 0 \
  -row-mt 1 -deadline good -cpu-used 2 "$out/$name.webm"
ffmpeg -nostdin -v error -y -ss 0.4 -i "$in" -frames:v 1 -vf "scale='min($width,iw)':-2" -q:v 5 "$out/$name.jpg"
