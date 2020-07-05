import { expect } from 'chai';
import { Account, AccountType } from '../../src/chapter08/moveFunction1';

describe('Sample', () => {
  it('daysOverdrawn is 0', () => {
    expect(new Account(new AccountType('Premium'), 0).bankCharge).equal(4.5);
    expect(new Account(new AccountType('Free'), 0).bankCharge).equal(4.5);
  });

  it('daysOverdrawn is 1', () => {
    expect(new Account(new AccountType('Premium'), 1).bankCharge).equal(14.5);
    expect(new Account(new AccountType('Free'), 1).bankCharge).equal(6.25);
  });

  it('Free plan with 0 days free', () => {
    expect(new Account(new AccountType('Free'), 0).overdraftCharge).equal(0);
  });

  it('Premium plan charges even if the number of days is 0', () => {
    expect(new Account(new AccountType('Premium'), 0).overdraftCharge).equal(10);
  });
});
