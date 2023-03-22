/* eslint-disable no-undef */
const printStatement = require("./statementOutput");

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(date, amount) {
    
    this.balance += amount;

    const newTransaction = {
      amount: amount,
      date: date,
      deposit: true,
      withdraw: false,
      balance: this.balance,
    };

    this.transactions.push(newTransaction);
  }

  withdraw(date, amount) {

    this.balance -= amount;

    const newTransaction = {
      amount: amount,
      date: date,
      deposit: false,
      withdraw: true,
      balance: this.balance,
    };

    this.transactions.push(newTransaction);
  }

  bankStatement() {
    const statement = new printStatement();
    statement.transactions = this.transactions;
    return statement.formatTransactions();
  }
  
}

module.exports = Account;

const account = new Account();
account.deposit("10/01/2023", 1000);
account.deposit("13/01/2023", 2000);
account.withdraw("14/01/2023", 500);
console.log(account.bankStatement());