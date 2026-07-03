#!/bin/bash
# Catcuri LMS — Local Preview Server
PORT=${1:-3000}
echo "Catcuri LMS Preview: http://localhost:$PORT"
cd "$(dirname "$0")" && python3 -m http.server "$PORT"
