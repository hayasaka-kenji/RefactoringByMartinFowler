import { expect } from 'chai';
import { payAmount } from '../../src/chapter10/replaceNestedConditionalWithGuardClauses.js';

describe('payAmount', () => {
  it('Separated', () => {
    const employee = {
      isSeparated: true
    }
    expect(payAmount(employee)).to.eql({ amount: 0, reasonCode: 'SEP' });
  });

  it('Retired', () => {
    const employee = {
      isRetired: true
    }
    expect(payAmount(employee)).to.eql({amount: 0, reasonCode: "RET"});
  });
});
