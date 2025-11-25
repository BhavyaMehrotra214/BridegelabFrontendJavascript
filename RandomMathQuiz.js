"use strict";  
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

//  Choose a random operator
const operators = ["+", "-", "*", "/"];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Calculate correct answer based on operator
switch (randomOperator) {
    case "+":
        correctAnswer = num1 + num2;
        break;

    case "-":
        correctAnswer = num1 - num2;
        break;

    case "*":
        correctAnswer = num1 * num2;
        break;

    case "/":
        correctAnswer = (num1 / num2).toFixed(2);   // 2 decimal places
        break;

    default:
        correctAnswer = "Invalid operator";
}

console.log("----- Random Math Quiz Generator -----");
console.log(`Question: ${num1} ${randomOperator} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
