"use strict";   
const marks = [78, 92, 85, 67, 74];

// Step 1: Validate: If any subject < 35 → Detained
let isFail = false;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        isFail = true;
        break;  
    }
}

// Step 2: Calculate total
let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

// Step 3: Calculate average & percentage
const average = total / marks.length;
const percentage = (total / 500) * 100;   

// Step 4: Decide promotion
let result = "";

if (isFail) {
    result = "Detained (Failed in one or more subjects)";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log("----- Academic Performance Report -----");
console.log(`Marks: ${marks}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
