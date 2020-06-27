export class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() { return this._data.quantity; }
  get itemPrices() { return this._data.itemPrices; }

  get price() {
    return this.quantity * this.itemPrices -
      Math.max(0, this.quantity - 500) * this.itemPrices * 0.05 +
      Math.min(this.quantity) * this.itemPrices * 0.01;
  }
}