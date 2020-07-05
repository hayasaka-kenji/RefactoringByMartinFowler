// 冬と夏で適用レートが異なる計算

const quantity = 10;
const plan = {
  summerStart: 6,
  summerEnd: 9,
  summerRate: 1.0,
  regularRate: 1.5,
  regularServiceCharge: 10
};

export function seasonCheck(aDate) {
  let charge;
  if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
  else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;

  return charge;
}

export class Season {
  constructor(month) {
    this._month = month;
  }

  get month() { return this._month; }

  isBefore(num) {
    return this.month <= num;
  }

  isAfter(num) {
    return this.month >= num;
  }
}