import { expect } from 'chai';
import { printOwing } from '../../src/chapter06/printOwing';

describe('chapter06: printOwing', () => {
  let invoice = {
    'customer': 'martin'
  };
  it('printOwing', () => {
    expect(printOwing(invoice)).to.equal('name: martin');
  });
});

