"use strict";    
const totalPurchase = 7800;

let discountPercent = 0;

if (totalPurchase >= 10000) {
    discountPercent = 25;
} 
else if (totalPurchase >= 5000) {
    discountPercent = 15;
} 
else if (totalPurchase >= 2000) {
    discountPercent = 5;
} 
else {
    discountPercent = 0;
}

const discountAmount = (totalPurchase * discountPercent) / 100;
const finalPrice = totalPurchase - discountAmount;

console.log("----- Progressive Discount System -----");
console.log(`Original Total: ₹${totalPurchase}`);
console.log(`Discount Applied: ${discountPercent}%`);
console.log(`Final Price After Discount: ₹${Math.round(finalPrice)}`);
