// budget.js

export function calculateTotal(expenses) {
    const total = expenses.reduce((sum, expense) => {
        return sum + Number(expense.amount);
    }, 0);

    return Math.round(total * 100) / 100;
}

export function renderExpenses(expenses) {
    const tableBody = document.getElementById("expenseTableBody");
    const totalDisplay = document.getElementById("totalExpenses");

    tableBody.innerHTML = "";

    expenses.forEach((expense) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${Number(expense.amount).toFixed(2)}</td>
            <td>${expense.category}</td>
        `;

        tableBody.appendChild(row);
    });

    totalDisplay.textContent = `$${calculateTotal(expenses).toFixed(2)}`;
}