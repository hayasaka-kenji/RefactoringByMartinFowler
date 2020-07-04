export class Order {
  constructor(quantitiy, item) {
    this._quantitiy = quantitiy;
    this._item = item
  }

  get price() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return this.basePrice * discountFactor;
  }

  get basePrice() {
    return this._quantitiy * this._item.price;
  }
}