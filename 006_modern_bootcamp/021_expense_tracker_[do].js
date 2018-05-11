const account = {
  name: 'Валера',
  expenses: [],
  income: [],
  addExpense(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  addIncome(description, amount) {
    this.income.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary() {
    const sumExpenses = this.expenses.reduce((previous, current) => {
      return previous + current.amount;
    }, 0);
    const sumIncome = this.income.reduce((previous, current) => {
      return previous + current.amount;
    }, 0);
    return `${this.name} has $${sumIncome -
      sumExpenses} in balance. [${sumIncome}$] - income, [-${sumExpenses}$] - expenses`;
  }
};

account.addIncome('Халявка', 15);
account.addIncome('Заначка', 10);
account.addExpense('Пивасик', 5);
account.addExpense('Орешки', 2);
account.addExpense('Орешки', 2);

console.log(account.getAccountSummary());
