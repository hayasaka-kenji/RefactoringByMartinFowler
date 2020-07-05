import { expect } from 'chai';
import { trackSummary } from '../../src/chapter08/moveFunction'

describe('trackSummary', () => {
  it('calculate distance', () => {
    const newYork = {
      lat: 40.73061,
      lon: -73.935242
    };

    const tokyo = {
      lat: 35.652832,
      lon: 139.839478
    };

    expect(trackSummary([newYork, tokyo])).to.eql({
      time: 10000,
      distance: 6740.914927144901,
      pace: 0.02472463581991205,
    });
  });
});