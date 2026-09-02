# Expense Tracker

## Project Description

Expense Tracker is a web application that helps users record and monitor their expenses.

This final version uses JavaScript ES Modules, array methods, DOM manipulation, event listeners, and Bootstrap to create a functional and responsive expense tracking application.

## Features

* Stores expenses as an array of objects.
* Each expense contains a name, amount, and category.
* Calculates total expenses using the `reduce()` method.
* Formats expense amounts to two decimal places.
* Dynamically renders expenses to the page.
* Allows users to add new expenses without refreshing the page.
* Uses an event listener for the Add Expense button.
* Uses ES Module imports and exports.
* Uses Bootstrap for responsive layout and form styling.
* Includes custom CSS styling.
* Responsive across different screen sizes.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* ES Modules

## Project Structure

```text
expense-tracker-js/
│
├── index.html
├── style.css
├── script.js
├── budget.js
└── README.md
```

## JavaScript Modules

The project separates its JavaScript logic into two files.

### budget.js

Contains and exports:

* `calculateTotal()`
* `renderExpenses()`

### script.js

Contains:

* The expenses array
* The Add Expense event listener
* Form input handling
* Adding new expenses
* Importing functions from `budget.js`

## Bootstrap

Bootstrap is included through a CDN and is used for:

* Responsive grid layout
* Buttons
* Forms
* Tables
* Cards
* Responsive table behavior

Custom CSS is still used to maintain the project's own design.

## How the Application Works

When the page loads, the existing expenses are displayed automatically.

When a user enters an expense and clicks **Add Expense**, JavaScript:

1. Reads the form values.
2. Creates a new expense object.
3. Adds the object to the expenses array.
4. Re-renders the table.
5. Updates the total expenses.
6. Clears the form.

The page does not need to be refreshed.

## Final Learning Outcomes

This project demonstrates understanding of:

* Arrays of objects
* Functions
* `reduce()`
* `forEach()`
* DOM manipulation
* Event listeners
* ES Modules
* `import` and `export`
* Form handling
* Bootstrap
* Responsive web design
* GitHub Pages deployment

## Future Improvements

Possible future features include:

* Delete expenses
* Edit expenses
* Local storage
* Budget limits
* Expense filtering
* Expense charts
* Monthly expense reports

## Author

Marwa Ali
