'use strict';
import { assert } from "chai";
import { add } from "../src/sample";

describe('Sample', () => {
  it('add', () => {
    assert.equal(add(1, 2), 3);
  });
});