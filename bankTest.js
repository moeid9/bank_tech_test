class Account {
    constructor() {
      this.balance = 0;
    }

    deposit(amount) {
        this.balance = this.balance + amount 
    }
}
  
  
  
module.exports = Account;