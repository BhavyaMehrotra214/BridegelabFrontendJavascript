function applyOperation(numbers, operation) {
    const result = [];
    
    for (let num of numbers) {
        result.push(operation(num)); // callback apply
    }

    return result;
}

const double = (n) => n * 2;
const square = (n) => n * 2; 

// Given array
const arr = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(arr, double));
console.log("Squared:", applyOperation(arr, n => n * n));
