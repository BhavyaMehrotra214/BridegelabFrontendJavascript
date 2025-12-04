const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 25 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 600, stock: 3 },
    { id: 4, name: "Shoes", category: "Clothing", price: 2000, stock: 15 },
    { id: 5, name: "Coffee Mug", category: "Kitchen", price: 350, stock: 2 },
    { id: 6, name: "Blender", category: "Kitchen", price: 3000, stock: 10 }
];

// 1. Get low stock products (stock < 5)
function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

// 2. Sort products by price
function sortProductsByPrice(order = "asc") {
    return products.slice().sort((a, b) => {
        return order === "asc" ? a.price - b.price : b.price - a.price;
    });
}

function calculateTotalInventoryValue() {
    return products.reduce((total, p) => total + (p.price * p.stock), 0);
}

// 4. Group products by category
function groupByCategory() {
    return products.reduce((group, item) => {
        if (!group[item.category]) {
            group[item.category] = [];
        }
        group[item.category].push(item);
        return group;
    }, {});
}



console.log("Low Stock Products (<5):");
console.log(getLowStockProducts());

console.log("\nProducts Sorted by Price (ASC):");
console.log(sortProductsByPrice("asc"));

console.log("\nProducts Sorted by Price (DESC):");
console.log(sortProductsByPrice("desc"));

console.log("\nTotal Inventory Value:");
console.log(calculateTotalInventoryValue());

console.log("\nProducts Grouped By Category:");
console.log(groupByCategory());
