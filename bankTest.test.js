const Account = require('./bankTest.js');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  it('should start with balance at 0', () =>{
    expect(account.balance).toEqual(0);
  });

  it('should handle a single deposit', () => {
    account.deposit(1000, '10/10/2022')
    expect(account.balance).toEqual(1000)
  });

  it('should handle a single deposit and show date', () => {
    account.deposit(1000, '10/10/2022')
    expect(account.balance).toEqual(1000)
    expect(account.transactions).toEqual([{"amount": 1000, "date": "10/10/2022", "deposit": true, "withdraw": false}])
  });
  it('should handle a single withdrawal and show date', () => {
    account.deposit(1000, '10/10/2022')
    account.withdraw(500, '12/10/2022')
    expect(account.balance).toEqual(500)
    expect(account.transactions).toContainEqual({"amount": 500, "date": "12/10/2022", "deposit": false, "withdraw": true}) 
  });
})