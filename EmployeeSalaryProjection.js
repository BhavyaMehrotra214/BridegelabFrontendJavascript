"use strict";  
let currentSalary = 45000;    
const incrementRate = 10;       

const projection = [];

// Loop for 5 years
for (let year = 1; year <= 5; year++) {
    
    currentSalary += (currentSalary * incrementRate) / 100;

    // push formatted data for table
    projection.push({
        Year: `Year ${year}`,
        Salary: Math.round(currentSalary)
    });
}

console.log("----- 5-Year Salary Projection -----");
console.table(projection);
