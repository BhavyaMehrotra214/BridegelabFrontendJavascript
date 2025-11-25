"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

// Custom Error Class
class InvalidOperationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOperationError";
  }
}

function calculate(op, a, b) {
  switch (op) {

    case "add":
      return a + b;

    case "subtract":
      return a - b;

    case "divide":
      if (b === 0) {
        throw new Error("Division by zero not allowed.");
      }
      return a / b;

    case "power":
      return Math.pow(a, b);

    case "root":
      if (a < 0) {
        throw new Error("Cannot take square root of negative number.");
      }
      return Math.sqrt(a);

    default:
      throw new InvalidOperationError(`Unknown operation: ${op}`);
  }
}

function runCalculator() {
  const results = [];

  for (let op of operations) {
    try {
      const res = calculate(op, num1, num2);
      results.push({
        operation: op,
        status: "SUCCESS",
        value: res
      });
    } catch (err) {
      results.push({
        operation: op,
        status: "FAILED",
        error: err.name + ": " + err.message
      });
    }
  }

  console.log("\n===== SMART CALCULATOR SUMMARY =====");
  results.forEach(r => {
    if (r.status === "SUCCESS") {
      console.log(`Operation: ${r.operation.toUpperCase()} → Result: ${r.value}`);
    } else {
      console.log(`Operation: ${r.operation.toUpperCase()} → ERROR → ${r.error}`);
    }
  });
  console.log("====================================\n");
}

runCalculator();
