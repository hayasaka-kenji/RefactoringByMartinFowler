import { expect } from 'chai';
import { priceOrder } from '../../src/chapter06/splitPhase'

describe('priceOrder',() => {
  const product = {
    basePrice: 120,
    discountRate: 0.1,
    discountThreshold: 10
  };

  const shippingMethod = {
    discountThreshold: 20,
    feePerCase: 5,
    discountedFee: 3
  };

  it('Calculate the appropriate data and the number of products by 10.', () => {
    expect(priceOrder(product, 10, shippingMethod)).to.equal(1230);
  });
});