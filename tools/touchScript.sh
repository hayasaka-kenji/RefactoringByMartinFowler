#!/bin/bash

# Usage:
# sh tools/touchScript.sh chapter07/hogeHoge   

touch src/$1.js
cp test/template.test.js test/$1.test.js
echo src/$1.js test/$1.test.js