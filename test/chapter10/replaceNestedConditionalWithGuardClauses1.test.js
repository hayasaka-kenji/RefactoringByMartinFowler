import { expect } from 'chai';
import { adjustedCapital } from '../../src/chapter10/replaceNestedConditionalWithGuardClauses1.js';

describe('adjustedCapital', () => {
  let anInstrument = {
    interestRate: 1,
    duration: 10,
    income: 10,
    adjustmentFactor: 24
  };
  it('sample1', () => {
    anInstrument.capital = 1;
    expect(adjustedCapital(anInstrument)).to.eql(24);
  });

  it('sample2', () => {
    anInstrument.capital = 0;
    expect(adjustedCapital(anInstrument)).to.eql(0);
  });
});
