export { printOwing };

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

function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // 未払金の計算
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記録
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  printDetails();

  function printDetails() {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }

  function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
  }
}