'use strict';
import { assert } from "chai";
import { add, square, cube } from "../src/calc";

describe('calc', function() {
  describe('add', function() {
    it ('第１引数と第２引数を足した結果を返す', function() {
      assert.equal(add(1,2), 3);
    });
  });
  describe('square', function() {
    it ('２乗した結果を返す', function() {
  assert.equal(square(2), 4);
    });
  });
  describe('cube', function() {
    it ('３乗した結果を返す', function() {
  assert.equal(cube(2), 8);
    });
  });
});