import { expect } from 'chai';
import { renderPerson, photoDiv } from '../../src/chapter08/moveStatementsIntoFunction.js';

describe('renderPerson, photoDiv', () => {
  const aPerson = {
    name: 'Paul',
    photo: {
      title: 'Mountain',
      location: 'Fuji',
      date: new Date('July 5, 2020')
    }
  };

  it('test: photo div', () => {
    let expectedValue = '<div>\n<p>title: Mountain</p>\n<p>location: Fuji</p>\n<p>date: Sun Jul 05 2020</p>\n</div>';
    expect(photoDiv(aPerson.photo)).equal(expectedValue);
  });
});
