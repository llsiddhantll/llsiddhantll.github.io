#!/bin/bash

rm -rf website.zip
zip -x ".git/**" "node_modules/**" "__sapper__/**" -r website.zip .