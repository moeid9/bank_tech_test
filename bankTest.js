require ('./transactions')
class Account {
    constructor() {
        this.balance = 0
        this.transactions = [];
    }

    deposit(amount, date) {
        this.balance += amount 
        const newTransaction = {
            amount: amount,
            date: date,
            deposit: true,
            withdraw: false,
        }
        this.transactions.push(newTransaction) 
    }

    withdraw(amount, date) {
        this.balance -=  amount 
        const newTransaction = {
            amount: amount,
            date: date,
            deposit: false,
            withdraw: true,
        }
        this.transactions.push(newTransaction) 
    }
}
  
  
  
module.exports = Account;