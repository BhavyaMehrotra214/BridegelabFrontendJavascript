"use strict";
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

// Arrays to store categorized results
const validTransactions = [];
const invalidTransactions = [];

function validateTransactions(list) {
  list.forEach((tx, index) => {
    try {
      if (tx === null) {
        throw new Error(`Null transaction at index ${index}`);
      }

      if (tx.id === undefined || tx.amount === undefined) {
        throw new Error(`Missing id/amount in transaction at index ${index}`);
      }

      if (tx.amount < 0) {
        throw new Error(`Negative amount for transaction ID: ${tx.id}`);
      }

      // If all validations pass
      validTransactions.push(tx);
      console.log(`Valid Transaction → ID: ${tx.id}, Amount: ${tx.amount}`);
    } catch (err) {
      // Push error + original transaction for tracking
      invalidTransactions.push({
        tx,
        error: err.message
      });

      console.log("Validation Error:", err.message);
    }
  });
}

// Run validation
validateTransactions(transactions);

console.log("\n====== FINAL REPORT ======");
console.log(`Total Valid Transactions: ${validTransactions.length}`);
console.log(`Total Invalid Transactions: ${invalidTransactions.length}`);

console.log("\nValid Transactions:", validTransactions);
console.log("\nInvalid Transactions:", invalidTransactions);
