# Bank_Tech_Test
### Approach
A test-driven development (TDD) methodology was used to build the application, in which tests were developed before any code. 
Object-Oriented Programming (OOP) techniques were also used in the development of the application, and a class was developed to house its functionality.
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moeid9/bank_tech_test
   cd bank-tech-test
   ```
2. Install NPM packages

   ```sh
   npm install
   ```
---

### Running Tests

1. Run the tests

   ```sh
   jest
   ```
---

### Running Program

    ```sh
    node
    const Account = require('./Account');
    const account = new Account();
    ```
---

### Examples
    ```sh
    account.deposit("10/01/2023", 1000);
    account.deposit("13/01/2023", 2000);
    account.withdraw("14/01/2023", 500);
    console.log(account.bankStatement());
    ```

