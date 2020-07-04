import { expect } from 'chai';
import { foundPerson } from '../../src/chapter07/SubstituteAlgorithm';

describe('foundPerson', () => {
  it('single value', () => {
    expect(foundPerson(['Don'])).equal('Don');
    expect(foundPerson(['John'])).equal('John');
  });

  it('multi value', () => {
    expect(foundPerson(['Don', 'John'])).equal('Don');
    expect(foundPerson(['Kent', 'John'])).equal('Kent');
  });

  it('not included', () => {
    expect(foundPerson(['Ryo', 'Ken'])).equal('');
  });
});

