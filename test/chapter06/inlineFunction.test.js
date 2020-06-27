import { expect } from 'chai';
import { rating } from '../../src/chapter06/inlineFunction';

describe('chapter06: rating', () => {
  it('If rate is 5 or less, set to 1', () => {
    const driver = {
      numberOfLateDeliveries: 5
    };

    expect(rating(driver)).to.equal(1);
  });

  it('If the rate exceeds 5, it becomes 2', () => {
    const driver = {
      numberOfLateDeliveries: 6
    };

    expect(rating(driver)).to.equal(2);
  });
});