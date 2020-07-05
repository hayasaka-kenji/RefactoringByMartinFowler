export class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(this.dateToday(), discountRate);
  }

  _setDiscountRate(aNumber) {
    this._contract._discountRate = aNumber;
  }

  becomePreferred() {
    this._setDiscountRate(this._contract.discountRate + 0.03);
    // さらに便宜を図る
  }

  applyDiscount(amount) {
    return amount - amount * this._contract.discountRate;
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() { return this._discountRate; }
  set discountRate(arg) { this.discountRate = arg };
}