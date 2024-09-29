#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: ./git-auto.sh 'commit message'"
  exit 1
fi

git add .

git commit -m "$1"

git push

echo "Running yarn rollup..."
yarn rollup

if [ $? -ne 0 ]; then
  echo "Yarn rollup failed. Exiting."
  exit 1
fi