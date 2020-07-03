import { expect } from 'chai';
import { highPriorityCount } from '../../src/chapter07/replacePrimitiveWithObject';

describe('highPriorityCount', () => {
  it('order 2', () => {
    expect(highPriorityCount).equal(2);
  });
});

