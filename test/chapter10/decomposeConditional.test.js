import { expect } from 'chai';
import { seasonCheck, Season } from '../../src/chapter10/decomposeConditional.js';

describe('seasonCheck', () => {
  it('Confirmation for May', () => {
    const aSeason = new Season(5);
    expect(seasonCheck(aSeason)).equal(25);
  });

  it('Confirmation for Jul', () => {
    const aSeason = new Season(7);
    expect(seasonCheck(aSeason)).equal(10);
  });

  it('Confirmation for Oct', () => {
    const aSeason = new Season(10);
    expect(seasonCheck(aSeason)).equal(25);
  });
});
