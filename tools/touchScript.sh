#!/bin/bash

# Usage:
# sh tools/touchScript.sh 08 hogeHoge

SCRIPT_DIR="src/chapter$1"
TEST_DIR="test/chapter$1"
SCRIPT_FILE="$SCRIPT_DIR/$2.js"
TEST_FILE="$TEST_DIR/$2.test.js"

if [ ! -e $SCRIPT_DIR ]; then
  mkdir $SCRIPT_DIR
fi

if [ ! -e $TEST_DIR ]; then
  mkdir $TEST_DIR
fi

touch $SCRIPT_FILE
cp test/template.test.js $TEST_FILE

echo script: $SCRIPT_FILE
echo test: $TEST_FILE