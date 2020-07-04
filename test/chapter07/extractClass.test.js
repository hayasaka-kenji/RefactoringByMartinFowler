import { expect } from 'chai';
import { Person } from '../../src/chapter07/extractClass';

describe('Person', () => {
  let aPerson;
  beforeEach(() => {
    aPerson = new Person('Paul', '0120', '333333');
  });

  it('name', () => {
    expect(aPerson.name).equal('Paul');
  });

  it('area code', () => {
    expect(aPerson.officeAreaCode).equal('0120');
  });

  it('number', () => {
    expect(aPerson.officeNumber).equal('333333');
  });

  it('telephone number', () => {
    expect(aPerson.telephoneNumber).equal('(0120) 333333');
  });
});

