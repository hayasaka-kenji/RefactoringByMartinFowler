import { expect } from "chai";
import { readingsOutsideRange, NumberRange } from "../../src/chapter06/introduceParameter";

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ]
};

const operationPlan = {
  temperatureFloor: 48,
  temperatureCeiling: 53
};

describe('readingOutsideRange', () => {
  const range = new NumberRange(operationPlan.temperatureFloor,
                                operationPlan.temperatureCeiling,)

  let alerts = readingsOutsideRange(station, range);
  let result = [{ temp: 47, time: '2016-11-10 09:10' },
                { temp: 58, time: '2016-11-10 09:30' }];
  it('Test out of temperature range', () => {
    expect(alerts).to.eql(result);
  });
});