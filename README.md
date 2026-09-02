# My Budget Tracker

## Project Description

My Budget Tracker is a simple website that helps users record and view
their expenses. The project was created using HTML and CSS.

## Features

- Expense table with sample expense records
- Add Expense form
- Expense category dropdown
- Expense date input
- Budgeting tips video
- Collapsible instructions section
- Table row hover effects
- Responsive design

## HTML Structure

### Header
The header contains the Budget Tracker logo, title, and introduction.

### Add Expense Form
The form contains:
- Expense name
- Expense amount
- Expense category
- Expense date
- Add Expense button

### Expense Table
The table displays:
- Name
- Amount
- Category
- Date

The table uses `thead`, `tbody`, `tr`, `th`, and `td`.

### Multimedia
An image is displayed near the main heading and a YouTube video
is embedded using an iframe.

### Instructions
The `details` and `summary` elements create a collapsible section
that explains how to use the tracker.

## CSS Selectors Used

The project uses advanced CSS selectors including:

1. Descendant selector:
   `.expenses-section td`

2. Direct child selector:
   `.add-expense-section > form`

3. Position pseudo-class:
   `tr:nth-child(even)`

4. Negation pseudo-class:
   `input:not([type="submit"])`

5. Focus pseudo-class:
   `input:focus`

6. Hover pseudo-class:
   `tbody tr:hover`

## Technologies Used

- HTML5
- CSS3

## Future Improvements

JavaScript will be added in a future week to make the Add Expense
button functional and allow users to add expenses dynamically.