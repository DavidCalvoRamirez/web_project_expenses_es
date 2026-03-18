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

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    return (balanceColor = "red");
  } else if (calculateBalance() <= budgetValue * 0.25) {
    return (balanceColor = "orange");
  } else {
    return (balanceColor = "green");
  }
}

function calculateCategoryExpenses(nombreCategoria) {
  let totalCategoria = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === nombreCategoria) {
      totalCategoria += expenseEntries[i][1];
    }
  }
  return totalCategoria;
}

function calculateLargestCategory() {
  let categoriaUnica = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let categoriesData = [];

  for (let i = 0; i < categoriaUnica.length; i++) {
    let nombre = categoriaUnica[i];
    let total = calculateCategoryExpenses(nombre);

    categoriesData.push([nombre, total]);
  }

  let maxCategoria = "";
  let maxTotal = 0;

  for (let j = 0; j < categoriesData.length; j++) {
    let nombre = categoriesData[j][0];
    let total = categoriesData[j][1];

    if (total > maxTotal) {
      maxTotal = total;
      maxCategoria = nombre;
    }
  }
  return maxCategoria;
}

function addExpenseEntry(nuevaCategoria) {
  expenseEntries.push(nuevaCategoria);
  totalExpensesValue += nuevaCategoria[1];
}
