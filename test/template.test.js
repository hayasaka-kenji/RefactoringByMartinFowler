import { expect } from 'chai';
import { sub } from '../../aScript';

describe('Sample', () => {
  it('sub', () => {
    expect(sub(2, 1)).equal(1);
  });
});