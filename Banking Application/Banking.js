const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 50 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1200, stock: 2 },
    { id: 4, name: "Shoes", category: "Footwear", price: 2500, stock: 0 },
    { id: 5, name: "Watch", category: "Accessories", price: 3000, stock: 8 }
];

// 1. Low stock (stock < 5)
function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

// 2. Sort products by price
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value
function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

// 4. Group by category
function groupByCategory() {
    return products.reduce((group, p) => {
        if (!group[p.category]) group[p.category] = [];
        group[p.category].push(p);
        return group;
    }, {});
}

console.log("Low Stock:", getLowStockProducts());
console.log("Sorted by Price:", sortProductsByPrice());
console.log("Total Inventory Value:", calculateTotalInventoryValue());
console.log("Grouped by Category:", groupByCategory());
