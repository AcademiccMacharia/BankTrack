// implementing a Bank Account Management System using Object-Oriented Programming (OOP) principles in JavaScript. The system should allow users to create different types of bank accounts, perform transactions such as deposits and withdrawals, and retrieve account information


class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
      this._accountNumber = accountNumber;
      this._accountHolder = accountHolder;
      this._balance = balance;
    }
  
    get accountNumber() {
      return this._accountNumber;
    }
  
    get accountHolder() {
      return this._accountHolder;
    }
  
    get balance() {
      return this._balance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be greater than zero.");
        return;
      }
  
      this._balance += amount;
      console.log(`Deposited ${amount} into account ${this._accountNumber}. New balance: ${this._balance}`);
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be greater than zero.");
        return;
      }
  
      if (amount > this._balance) {
        console.log("Insufficient funds.");
        return;
      }
  
      this._balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this._accountNumber}. New balance: ${this._balance}`);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
      super(accountNumber, accountHolder, balance);
      this._interestRate = interestRate;
    }
  
    calculateInterest() {
      const interest = this._balance * this._interestRate;
      console.log(`Interest amount for account ${this._accountNumber}: ${interest}`);
      return interest;
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
      super(accountNumber, accountHolder, balance);
      this._overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be greater than zero.");
        return;
      }
  
      const availableFunds = this._balance + this._overdraftLimit;
      if (amount > availableFunds) {
        console.log("Withdrawal amount exceeds available funds.");
        return;
      }
  
      if (amount > this._balance) {
        const overdraftAmount = amount - this._balance;
        this._balance = 0;
        console.log(`Withdrawn ${this._balance} from account ${this._accountNumber}. New balance: ${this._balance}`);
        console.log(`Overdraft used: ${overdraftAmount}`);
      } else {
        this._balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this._accountNumber}. New balance: ${this._balance}`);
      }
    }
  }
  

  const savingsAccount = new SavingsAccount("SA001", "John Doe", 1000, 0.05);
  console.log(`Account number: ${savingsAccount.accountNumber}`);
  console.log(`Account holder: ${savingsAccount.accountHolder}`);
  console.log(`Balance: ${savingsAccount.balance}`);
  savingsAccount.deposit(500);
  savingsAccount.withdraw(200);
  savingsAccount.calculateInterest();
  
  const checkingAccount = new CheckingAccount("CA001", "Jane Smith", 500, 1000);
  console.log(`Account number: ${checkingAccount.accountNumber}`);
  console.log(`Account holder: ${checkingAccount.accountHolder}`);
  console.log(`Balance: ${checkingAccount.balance}`);
  checkingAccount.deposit(200);
  checkingAccount.withdraw(800);
  checkingAccount.withdraw(1200);
  


//   const balance = prompt("Enter the b")
   const bankContent = document.querySelector('.container');

const displaySavings = () => {
 
const bankAccount = document.createElement('div');
bankAccount.classList.add('bankAccount');

const heading = document.createElement('p')
heading.innerText = "This is the savings account"

const accountNumber = document.createElement('h3');
accountNumber.classList.add('accountNumber');
accountNumber.innerText = `Account number: ${savingsAccount.accountNumber}`;

const accountHolder = document.createElement('h3');
accountHolder.classList.add('accountHolder');
accountHolder.innerText = `Account holder: ${savingsAccount.accountHolder}`;

const balance = document.createElement('p');
balance.classList.add('balance');
balance.innerText = `Balance: ${savingsAccount.balance}`;

const interestRate = document.createElement('h3');
interestRate.classList.add('interestRate');
interestRate.innerText = `Interest rate: ${savingsAccount.calculateInterest()}`;

bankAccount.append(accountNumber, accountHolder, balance, interestRate);
bankContent.append(bankAccount);
}

displaySavings()