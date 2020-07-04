import { expect } from 'chai';
import { Person } from '../../src/chapter07/extractClass';

describe('Person', () => {
  it('Is the name, area code, number, phone number.', () => {
    const aPerson = new Person('Paul', '0120', '333333');
    expect(aPerson.name).equal('Paul');
    expect(aPerson.officeAreaCode).equal('0120');
    expect(aPerson.officeNumber).equal('333333');
    expect(aPerson.telephoneNumber).equal('(0120) 333333');
  });
});

