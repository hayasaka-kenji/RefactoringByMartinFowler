import { expect } from 'chai';
import { Customer } from '../../src/chapter08/moveField.js';

describe('Customer', () => {
  it('Sample', () => {
    const customer = new Customer('Paul', 0.05);
    expect(customer.applyDiscount(500)).equal(475);
  });
});
