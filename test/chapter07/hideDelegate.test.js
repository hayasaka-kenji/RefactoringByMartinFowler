import { expect } from 'chai';
import { Person, Department } from '../../src/chapter07/hideDelegate';

describe('Person', () => {
  const aPerson = new Person('Ryotsu', 
    new Department('ohara', 123)
  );

  it('name',() => {
    expect(aPerson.name).equal('Ryotsu');
  });

  it('manager',() => {
    expect(aPerson.manager).equal('ohara');
  });

  it('charge code',() => {
    expect(aPerson.chargeCode).equal(123);
  });

});