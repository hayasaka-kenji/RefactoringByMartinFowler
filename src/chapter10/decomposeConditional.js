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
  return summer(aDate) ? summerCharge() : regulartCharge();
}

const summer = aDate => 
        !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
const summerCharge = () => quantity * plan.summerRate;
const regulartCharge = () => 
        quantity * plan.regularRate + plan.regularServiceCharge;

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