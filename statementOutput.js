/* eslint-disable no-undef */
module.exports = class printStatement {
    constructor() {
        this.transactions = [];
    }
    formatTransactions() {
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
