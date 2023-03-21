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

    let statement = "date      || credit || debit || balance";
    
    const transaction = this.transactions;
    //for loop to create the statement output
    for (let i = 0; i < transaction.length; i++) {
      const deposit = transaction[i].deposit ? transaction[i].amount.toFixed(2) : '';
      const withdraw = transaction[i].withdraw ? transaction[i].amount.toFixed(2) : '';
      const balance = transaction[i].balance.toFixed(2);
      statement += `\n${transaction[i].date}||${deposit ? `${deposit}` : '       '} ||${withdraw ? `${withdraw}` : '      '} || ${balance}`;
    }

    return statement;
  }
}

export default Account;

// const account = new Account();
// account.deposit("10/01/2023", 1000);
// account.deposit("13/01/2023", 2000);
// account.withdraw("14/01/2023", 500);

// console.log(account.bankStatement());
