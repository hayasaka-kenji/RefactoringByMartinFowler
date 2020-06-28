import { expect } from "chai";
import { defaultOwner, setDefaultOwner } from "../../src/chapter06/encapsulateVariable2";

describe('defaultOwner', () => {
  it('Whether Martin Folwer', () => {
    let spaceship = {};
    spaceship.owner = defaultOwner();

    expect(spaceship.owner.firstName).equal('Martin');
    expect(spaceship.owner.lastName).equal('Fowler');
  });

  it('Make a change', () => {
    setDefaultOwner({firstName: 'Rebecca', lastName: 'Persons'});
    let user = defaultOwner();

    expect(user.firstName).equal('Rebecca');
    expect(user.lastName).equal('Persons');
  });
});