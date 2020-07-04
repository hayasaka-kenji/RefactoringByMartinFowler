export class Order {
  constructor(quantitiy, item) {
    this._quantitiy = quantitiy;
    this._item = item
  }

  get price() {
    let basePrice = this._quantitiy * this._item.price;
    let discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}