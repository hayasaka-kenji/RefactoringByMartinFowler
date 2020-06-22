import { expect } from 'chai';
import { Province } from '../../src/chapter04/province';
import { sampleProvinceData } from '../../src/chapter04/sampleProvinceData';

describe('chapter04.province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });

  it('profit', function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  });
});