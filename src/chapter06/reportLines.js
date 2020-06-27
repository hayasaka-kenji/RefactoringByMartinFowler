function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
}

let customer = {
  name: 'Martin',
  location: 'Tokyo'
}
console.log((reportLines(customer)));