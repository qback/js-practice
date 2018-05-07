const person = {
  name: 'Валера',
  income: 0,
  expense: 0
};

function addIncome(person, sum) {
  person.income += sum;
}

function addExpense(person, sum) {
  person.expense -= sum;
}

function resetAccount(person) {
  person.expense = person.income = 0;
}

function showAccountSummary(person) {
  return `
  аккаунт - ${person.name},
  заработки - ${person.income},
  расходы - ${person.expense},
  баланс - ${person.income + person.expense}`;
}

addIncome(person, 500);
addIncome(person, 550);
addExpense(person, 400);
console.log(showAccountSummary(person));
resetAccount(person);
console.log(showAccountSummary(person));
