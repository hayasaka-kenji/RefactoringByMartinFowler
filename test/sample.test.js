'use strict';
import { assert } from "chai";
import { add } from "../src/sample";

describe('Sample', function () {
  it('add', function () {
    assert.equal(add(1, 2), 3);
  });
});