import { expect } from 'chai';
import { disabilityAmount } from '../../src/chapter10/consolidateConditionalExpression.js';

describe('disabilityAmount', () => {
  it('sample: 0', () => {
    const data = {
      seniority: 10,
      monthsDisabled: 10,
      isPartTime: true
    }
    expect(disabilityAmount(data)).equal(0);
  });

  it('sample: 2', () => {
    const data = {
      seniority: 10,
      monthsDisabled: 10,
      isPartTime: false
    }
    expect(disabilityAmount(data)).equal(2);
  });
});
