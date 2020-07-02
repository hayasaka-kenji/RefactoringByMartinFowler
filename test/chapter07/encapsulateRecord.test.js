import { expect } from 'chai';
import { getOrganization } from '../../src/chapter07/encapsulateRecord';

describe('organization test', () => {
  const data = { name: 'Acme Gooseberries', country: 'GB' };
  it('name', () => {
    expect(getOrganization().name).equal(data.name);
  });

  it('replacing the name', () => {
    const replacedName = 'Paul';
    let organization = getOrganization();
    organization.name = replacedName;
    expect(organization.name).equal(replacedName);
  })
});

