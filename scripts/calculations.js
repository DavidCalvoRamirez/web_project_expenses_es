let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue = totalExpensesValue + expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
