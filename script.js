// Part 1: Store Sample Expenses

let rent = 250;
let food = 120;
let transport = 80;
let internet = 110;
let entertainment = 60;
let utilities = 95;


// Part 2: Flag High Spending

if (rent > 100) {
    console.log("Rent: High Spending");
} else {
    console.log("Rent: Normal Spending");
}

if (food > 100) {
    console.log("Food: High Spending");
} else {
    console.log("Food: Normal Spending");
}

if (transport > 100) {
    console.log("Transport: High Spending");
} else {
    console.log("Transport: Normal Spending");
}

if (internet > 100) {
    console.log("Internet: High Spending");
} else {
    console.log("Internet: Normal Spending");
}

if (entertainment > 100) {
    console.log("Entertainment: High Spending");
} else {
    console.log("Entertainment: Normal Spending");
}

if (utilities > 100) {
    console.log("Utilities: High Spending");
} else {
    console.log("Utilities: Normal Spending");
}


// Part 3: Calculate Total Expenses

let expenses = [
    rent,
    food,
    transport,
    internet,
    entertainment,
    utilities
];

let totalExpenses = 0;

for (let expense of expenses) {
    totalExpenses += expense;
}

console.log("Total Expenses: $" + totalExpenses);


// Part 4: Budget Check

let monthlyIncome = 800;

console.log("Monthly Income: $" + monthlyIncome);
console.log("Total Expenses: $" + totalExpenses);

if (totalExpenses <= monthlyIncome) {
    console.log("Status: Within Budget");
} else {
    console.log("Status: Over Budget");
}