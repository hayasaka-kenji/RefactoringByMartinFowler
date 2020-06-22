'use strict';
import { expect, assert } from "chai";
import { add, sub } from "../src/sample";

describe('Sample', () => {
  it('add', () => {
    assert.equal(add(1, 2), 3);
  });

  it('sub', () => {
    expect(sub(2, 1)).equal(1);
  });
});

