#!/bin/bash
npm create next-app@14 -- next-amplify-gen2 \
  --typescript \
  --eslint \
  --app \
  --src-dir \
  --tailwind \
  --import-alias '@/*'

exit 0
