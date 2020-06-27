import { expect } from 'chai';
import { getRating } from '../../src/chapter06/inlineFunction';

describe('chapter06: getRating', () => {
  it('If rate is 5 or less, set to 1', () => {
    const driver = {
      numberOfLateDeliveries: 5
    };

    expect(getRating(driver)).to.equal(1);
  });

  it('If the rate exceeds 5, it becomes 2', () => {
    const driver = {
      numberOfLateDeliveries: 6
    };

    expect(getRating(driver)).to.equal(2);
  });
});