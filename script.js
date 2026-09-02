// Part 1: Store expenses as an array of objects

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


// Part 2: Calculate total expenses

function calculateTotal() {
    let total = expenses.reduce(function (sum, expense) {
        return sum + Number(expense.amount);
    }, 0);

    return Math.round(total * 100) / 100;
}


// Part 3: Render expenses to the DOM

function renderExpenses() {
    const tableBody = document.getElementById("expenseTableBody");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Create a row for every expense
    expenses.forEach(function (expense) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${Number(expense.amount).toFixed(2)}</td>
            <td>${expense.category}</td>
        `;

        tableBody.appendChild(row);
    });

    // Update total
    document.getElementById("totalExpenses").textContent =
        "$" + calculateTotal().toFixed(2);
}


// Part 4: Add Expense event listener

const addExpenseButton = document.getElementById("addExpenseButton");

addExpenseButton.addEventListener("click", function () {

    const name = document.getElementById("expenseName").value;
    const amount = document.getElementById("expenseAmount").value;
    const category = document.getElementById("expenseCategory").value;

    // Check that all fields are filled
    if (name === "" || amount === "" || category === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new expense object
    const newExpense = {
        name: name,
        amount: Number(amount),
        category: category
    };

    // Add the new expense to the array
    expenses.push(newExpense);

    // Re-render the table
    renderExpenses();

    // Clear the form
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";
});


// Display expenses when the page loads
renderExpenses();