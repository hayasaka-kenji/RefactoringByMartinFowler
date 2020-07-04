#!/bin/bash

# Usage:
# sh tools/touchScript.sh 08 hogeHoge

SCRIPT_FILE="src/chapter$1/$2.js"
TEST_FILE="test/chapter$1/$2.test.js"

touch $SCRIPT_FILE
cp test/template.test.js $TEST_FILE

echo script: $SCRIPT_FILE
echo test: $TEST_FILE