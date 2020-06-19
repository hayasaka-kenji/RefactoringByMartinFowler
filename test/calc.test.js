'use strict';
import { assert } from "chai";
import { add, square, cube } from "../src/calc";

describe('calc', function () {
  describe('add', function () {
    it('add test', function () {
      assert.equal(add(1, 2), 3);
    });
  });
});