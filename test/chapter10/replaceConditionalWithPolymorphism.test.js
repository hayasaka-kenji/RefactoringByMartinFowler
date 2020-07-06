import { expect } from 'chai';
import { plumage, airSpeedVelocity } from '../../src/chapter10/replaceConditionalWithPolymorphism';

describe('plumage', () => {
  it('supported birds', () => {
    const bird = {
      type: 'EuropeanSwallow',
      numberOfCoconuts: 2,
      voltage: 100
    };

    expect(plumage(bird)).equal('average');
  });
});

describe('airSpeedVelocity', () => {
  it('supported birds', () => {
    const bird = {
      type: 'EuropeanSwallow',
      numberOfCoconuts: 2,
      voltage: 100,
      isNailed: false
    };

    expect(airSpeedVelocity(bird)).equal(35);
  });
});
