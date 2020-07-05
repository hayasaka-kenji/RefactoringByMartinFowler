export class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
  }
  get discountRate() {return this._discountRate;}
  becomePreferred() {
    this._discountRate += 0.03;
    // さらに便宜を図る
  }
  applyDiscount(amount) {
    return amount - amount * this._discountRate;
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }
}