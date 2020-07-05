import { expect } from 'chai';
import { Account } from '../../src/chapter08/moveField1.js';

describe('Account', () => {
  it('Sample', () => {
    const anAccount = new Account('Paul', 'normal', 0.01);
    expect(anAccount.interestRate).equal(0.01);
  });
});
