const menu = {
    pizza: 200,
    burger: 120,
    fries: 80,
    coke: 40
};

// Function to calculate total bill
function calculateBill(orderItems) {
    // Step 1: map() → convert items into their prices
    const prices = orderItems.map(item => {
        if (!menu[item]) {
            // Throw an error for invalid item
            throw new Error(`Item not found: ${item}`);
        }
        return menu[item];
    });

    // Step 2: reduce() → add all prices
    const total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}



try {
    const order1 = ["pizza", "fries", "coke"];
    console.log("Total Bill:", calculateBill(order1));
} catch (err) {
    console.log("Error:", err.message);
}

try {
    const order2 = ["pizza", "icecream"];  
    console.log("Total Bill:", calculateBill(order2));
} catch (err) {
    console.log("Error:", err.message);
}
