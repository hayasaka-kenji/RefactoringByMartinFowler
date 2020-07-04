import { expect } from 'chai';
import { Shipment } from '../../src/chapter07/inlineClass';

describe('Shipment', () => {
  it('Enter name and number using Shipment', () => {
    const aShipment = new Shipment('ART', '0120');
    expect(aShipment.trackingInfo).to.eql('ART: 0120');

    aShipment.shippingCompany = 'SAKAI';
    expect(aShipment.trackingInfo).to.eql('SAKAI: 0120');
  });
});