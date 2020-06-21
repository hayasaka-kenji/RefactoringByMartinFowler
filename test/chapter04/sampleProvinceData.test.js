// test
const assert = require('assert');
import { sampleProvinceData, Producer, Province } from '../../src/chapter04/sampleProvinceData';

describe('main', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});