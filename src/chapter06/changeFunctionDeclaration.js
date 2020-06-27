const customer = {
  address: {
    state: "CT"
  }
};

function inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const someCustomers = [customer];
const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state));
console.log(newEnglanders);