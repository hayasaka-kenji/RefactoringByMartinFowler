const assert = require('assert');
const myfuncs = require('./calc.js');

describe('myfuncs', function() {
  describe('add', function() {
    it ('第１引数と第２引数を足した結果を返す', function() {
      assert.equal(myfuncs.add(1,2), 3);
    });
  });
  describe('square', function() {
    it ('２乗した結果を返す', function() {
      assert.equal(myfuncs.square(2), 4);
    });
  });
  describe('cube', function() {
    it ('３乗した結果を返す', function() {
      assert.equal(myfuncs.cube(2), 8);
    });
  });
});