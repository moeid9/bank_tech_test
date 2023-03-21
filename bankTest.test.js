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
    account.deposit('10/10/2022', 1000)
    expect(account.balance).toEqual(1000)
  });

  it('should handle a single deposit and show date', () => {
    account.deposit('10/10/2022', 1000)
    expect(account.balance).toEqual(1000)
    expect(account.transactions).toEqual([{"amount": 1000, "balance": 1000, "date": "10/10/2022", "deposit": true, "withdraw": false}])
  });

  it('should handle a single withdrawal and show date', () => {
    account.deposit('10/10/2022', 1000)
    account.withdraw('12/10/2022', 500)
    expect(account.balance).toEqual(500)
    expect(account.transactions).toContainEqual({"amount": 500, "balance": 500, "date": "12/10/2022", "deposit": false, "withdraw": true}) 
  });

  it('should return a display', () => {
    account.deposit('10/10/2022', 1000)
    account.withdraw('12/10/2022', 500)
    expect(account.balance).toEqual(500)
    expect(account.bankStatement()).toContain(`10/10/2022||1000.00 ||       || 1000.00`)
    expect(account.bankStatement()).toContain(`12/10/2022||        ||500.00 || 500.00`) 
  });

})