'use strict';
import { assert } from "chai";
import { add } from "../src/calc";

describe('sample', function () {
  it('add', function () {
    assert.equal(add(1, 2), 3);
  });
}); 