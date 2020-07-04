import { expect } from 'chai';
import { Order } from '../../src/chapter07/replaceTempWithQuery';

describe('Order', () => {
  it('not discount', () => {
    const order = new Order(10, { price: 100 });
    expect(order.price).equal(980);
  });

  it('discount', () => {
    const order = new Order(20, { price: 100 });
    expect(order.price).equal(1900);
  });
});