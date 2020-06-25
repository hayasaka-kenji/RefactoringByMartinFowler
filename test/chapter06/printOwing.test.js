import { expect } from 'chai';
import { printOwing } from '../../src/chapter06/printOwing';

let invoice = {
  "orders": [
    { "amount": 1 }
  ],
  "customer": "Martin"
};

let Clock = {
  today: {
    getFullYear() {
      return 2020;
    },

    getMonth() {
      return 4;
    },

    getDate() {
      return 25;
    }
  }
};

describe('chapter06: printOwing', () => {
  it('printOwing', () => {
    const result = 
      '***********************\n' +
      '**** Customer Owes ****\n' +
      '***********************\n' +
      'name: Martin\n' +
      'amount: 1\n' +
      'due: 6/24/2020\n';

    expect(printOwing(invoice)).to.equal(console.log(result));
  });
});

