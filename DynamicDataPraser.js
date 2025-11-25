"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];   
const invalidNumbers = [];

console.log("-------- Data Parsing Started --------\n");

// Loop through each data item
for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    // Convert to different forms
    const numValue = Number(value);
    const boolValue = Boolean(value);
    const strValue = String(value);

    console.log(`Value: ${value}`);
    console.log(`→ Number: ${numValue}`);
    console.log(`→ Boolean: ${boolValue}`);
    console.log(`→ String: "${strValue}"`);

    if (!isNaN(numValue) && value !== " ") {
        
        validNumbers.push(numValue);
    } else {
        invalidNumbers.push(value);
    }

    console.log("----------------------------------");
}

console.log("\n-------- Final Report --------");

// Valid numeric data
console.log("Valid Numeric Data:");
console.log(validNumbers);

// Invalid numeric data
console.log("\n Invalid Numeric Data:");
console.log(invalidNumbers);

console.log("\n-------- Detailed Summary --------");
for (let i = 0; i < apiData.length; i++) {
    const v = apiData[i];
    const n = Number(v);

    if (!isNaN(n) && v !== " ") {
        console.log(`VALID → Original: ${v}, Converted Number: ${n}`);
    } else {
        console.log(`INVALID → "${v}" cannot be converted to a valid number`);
    }
}

console.log("\n-------- Parsing Complete --------");
