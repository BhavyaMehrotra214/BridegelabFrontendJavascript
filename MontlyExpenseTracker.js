"use strict";   
const expenses = [3000, 1200, 8000, 2500, 1500];

// Step 1: Calculate total using a loop
let totalExpense = 0;

for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];  
}

// Step 2: Calculate average
const averageExpense = totalExpense / expenses.length;

// Step 3: Add 10% tax to total
let finalAmount = totalExpense;
finalAmount += finalAmount * 0.10;   // Add 10% tax

console.log("----- Monthly Expense Report -----");
console.log(`Total Expenses: ₹${totalExpense.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Final Amount After 10% Tax: ₹${finalAmount.toFixed(2)}`);