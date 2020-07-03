#!/bin/bash

# Usage:
# sh tools/touchScript.sh chapter07/hogeHoge   

touch src/$1.js
cp test/template.test.js test/$1.test.js
echo script: src/$1.js
echo test:   test/$1.test.js