import { expect } from 'chai';
import { TrackingInformation, Shipment } from '../../src/chapter07/inlineClass';

describe('TrackingInformation', () => {
  it('Enter number and company', () => {
    const anInfo = new TrackingInformation('ART', '0120');
    expect(anInfo.shippingCompany).equal('ART');
    expect(anInfo.trackingNumber).equal('0120');
    expect(anInfo.display).equal('ART: 0120');
  });
});

describe('Shipment', () => {
  it('Enter name and number using Shipment', () => {
    const aShipment = new Shipment(new TrackingInformation('ART', '0120'));
    expect(aShipment.trackingInfo).to.eql('ART: 0120');

    aShipment.shippingCompany = 'SAKAI';
    expect(aShipment.trackingInfo).to.eql('SAKAI: 0120');
  });
});