export class TrackingInformation {
  constructor(company, number) {
    this._shippingCompany = company;
    this._trackingNumber = number;
  }

  get shippingCompany() { return this._shippingCompany; }
  set shippingCompany(arg) { this._shippingCompany = arg; }
  get trackingNumber() { return this._trackingNumber; }
  set trackingNumber(arg) { this._trackingNumber = arg; }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

// TrackingInformationはShipmentの中で抽出される。
export class Shipment {
  constructor(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }

  get trackingInfo() {
    return this._trackingInformation.display;
  }

  get trackingInformation() {return this._trackingInformation;}

  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}