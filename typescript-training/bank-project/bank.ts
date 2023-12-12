class BankAccount {
  private balance: number;
  private interestRate: number;
  private interestCeiling: number;
  private favoriteAccounts: BankAccount[] = [];
  private id: number;

  constructor(
    id: number,
    balance: number,
    interestRate: number,
    interestCeiling: number
  ) {
    this.id = id;
    this.balance = balance;
    this.interestRate = interestRate;
    this.interestCeiling = interestCeiling;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  widthdraw(amount: number): void {
    if (this.balance - amount < 0) {
      throw new Error('Insufficient funds.');
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }

  transferMoney(amount: number, account: BankAccount): void {
    this.widthdraw(amount);
    account.deposit(amount);
  }

  getMensualInterest(): number {
    if (this.balance > this.interestCeiling) {
      return this.interestCeiling * this.interestRate;
    } else {
      return this.balance * this.interestRate;
    }
  }
  addAccountToFavorites(account: BankAccount): void {
    this.favoriteAccounts.push(account);
  }

  getFavoriteAccounts(): BankAccount[] {
    return this.favoriteAccounts;
  }

  removeFavoriteAccountById(id: number): void {
    const indexToRemove = this.favoriteAccounts.findIndex(
      (account: BankAccount) => account.id === id
    );
    if (indexToRemove === -1) {
      throw new Error('Account not found in favorites');
    }
    this.favoriteAccounts.splice(indexToRemove, 1);
  }
}

// STORY

const account1 = new BankAccount(1, 40000, 0.01, 50000);
const account2 = new BankAccount(2, 100000, 0.01, 50000);

account1.addAccountToFavorites(account2);

account1.transferMoney(20000, account1.getFavoriteAccounts()[0]);

try {
  account1.widthdraw(25000);
} catch (err: unknown) {
  console.log('Error : ', (err as Error).message);
}

console.log('Account 1 mensual interests ', account1.getMensualInterest());

console.log('Balance account 1', account1.getBalance());

account1.removeFavoriteAccountById(2);
