const customer = {
  address: {
    state: "CT"
  }
}

function inNewEngland (aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}
const someCustomers = [customer];
const newEnglanders = someCustomers.filter(c => inNewEngland(c));


console.log(inNewEngland(customer));
console.log(newEnglanders)