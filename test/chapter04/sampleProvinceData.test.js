import { expect } from 'chai';
import { Province } from '../../src/chapter04/province';
import { sampleProvinceData } from '../../src/chapter04/sampleProvinceData';

describe('chapter04: province', function () {
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

  it('change a production', function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  });

  it('zero demand', function() {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  });

  it('negative demand', function() {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  });

  it('empty string demand', function() {
    asia.demand = '';
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

describe('chapter04: no producers', function() {
  let noProducers;
  beforeEach(function() {
    const data = {
      name: 'No producers',
      producers: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  });

  it('shortfall', function () {
    expect(noProducers.shortfall).equal(30);
  });

  it('profit', function () {
    expect(noProducers.profit).equal(0);
  });
});

// // TypeError: doc.producers.forEach is not a function
// describe('chapter04: string for producers', function() {
//   it('', function() {
//     const data = {
//       name: 'String producers',
//       producers: '',
//       demand: 30,
//       price: 20
//     };
//     const prov = new Province(data);
//     expect(prov.shortfall).equal(0);
//   });
// });