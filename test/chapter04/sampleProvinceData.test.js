import { expect } from 'chai';
import { Province } from '../../src/chapter04/province';
import { sampleProvinceData } from '../../src/chapter04/sampleProvinceData';

describe('chapter04.province', function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });

  it('shortfall', function () {
    expect(asia.shortfall).equal(5);
  });

  it('profit', function () {
    expect(asia.profit).equal(230);
  });
});