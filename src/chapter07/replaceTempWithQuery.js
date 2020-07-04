export class Order {
  constructor(quantitiy, item) {
    this._quantitiy = quantitiy;
    this._item = item
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }

  get basePrice() {
    return this._quantitiy * this._item.price;
  }

  get discountFactor() {
    let result = 0.98;
    if (this.basePrice > 1000) result -= 0.03;
    return result;
  }
}