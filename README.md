# Expense Tracker JavaScript

## Project Description

This project is a simple Expense Tracker application built using HTML, CSS, and JavaScript.

The application allows users to view their expenses, calculate the total amount spent, and add new expenses without refreshing the page.

## Features

* Stores expenses in an array of objects.
* Each expense contains:

  * Name
  * Amount
  * Category
* Calculates the total expenses using `reduce()`.
* Formats expense amounts to two decimal places.
* Dynamically renders expenses in an HTML table.
* Allows users to add new expenses using a form.
* Updates the table automatically when a new expense is added.
* Uses JavaScript event listeners to handle user actions.

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```text
expense-tracker-js/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

The expenses are stored as objects inside a JavaScript array.

The `calculateTotal()` function uses the `reduce()` method to calculate the total amount of all expenses.

The `renderExpenses()` function clears the existing table and dynamically creates new table rows from the expenses array.

When the user clicks the **Add Expense** button, an event listener reads the form values, creates a new expense object, adds it to the array, and updates the table without refreshing the page.

## Learning Objectives

This project demonstrates my understanding of:

* Arrays of objects
* JavaScript functions
* Array methods such as `reduce()` and `forEach()`
* DOM manipulation
* Event listeners
* Form input handling
* Number formatting
* Dynamic content rendering

## Future Improvements

Future versions of this project could include:

* Delete expense functionality
* Edit expense functionality
* Expense filtering by category
* Local storage
* Monthly budget tracking
* Expense charts and summaries

## Author

Marwa Ali
