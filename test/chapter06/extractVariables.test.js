import { expect } from 'chai';
import { price } from '../../src/chapter06/extractVariables';
import { Order } from '../../src/chapter06/extractVariables1';

describe('chapter06: extractVariables', () => {
  it('If defined as {quantity: 50, temPrice: 200}, returns 10100', () => {
    const order = {
      quantity: 50,
      itemPrice: 200
    };
    expect(price(order)).equal(10100);
  });
});

describe('chapter06: extractVariables class', () => {
  it('If defined as {quantity: 10, temPrice: 210}, returns 2121', () => {
    const record = {
      quantity: 10,
      itemPrices: 210
    };
    expect(new Order(record).price).equal(2121);
  });
});