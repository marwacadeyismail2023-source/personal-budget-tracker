// script.js

import { calculateTotal, renderExpenses } from "./budget.js";

// Expense data
let expenses = [
    {
        name: "Rent",
        amount: 250,
        category: "Housing"
    },
    {
        name: "Food",
        amount: 120,
        category: "Food"
    },
    {
        name: "Transport",
        amount: 80,
        category: "Transport"
    },
    {
        name: "Internet",
        amount: 110,
        category: "Utilities"
    },
    {
        name: "Entertainment",
        amount: 60,
        category: "Entertainment"
    },
    {
        name: "Electricity",
        amount: 95,
        category: "Utilities"
    }
];


// Add Expense button
const addExpenseButton = document.getElementById("addExpenseButton");

addExpenseButton.addEventListener("click", function () {

    const name = document.getElementById("expenseName").value.trim();
    const amount = document.getElementById("expenseAmount").value;
    const category = document.getElementById("expenseCategory").value;

    if (name === "" || amount === "" || category === "") {
        alert("Please fill in all fields.");
        return;
    }

    const newExpense = {
        name: name,
        amount: Number(amount),
        category: category
    };

    expenses.push(newExpense);

    renderExpenses(expenses);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";
});


// Initial display
renderExpenses(expenses);