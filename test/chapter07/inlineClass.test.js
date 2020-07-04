import { expect } from 'chai';
import { TrackingInformation } from '../../src/chapter07/inlineClass';

describe('TrackingInformation', () => {
  it('Enter number and company', () => {
    const anInfo = new TrackingInformation('art', '0120');
    expect(anInfo.shippingCompany).equal('art');
    expect(anInfo.trackingNumber).equal('0120');
    expect(anInfo.display).equal('art: 0120');
  });
});

