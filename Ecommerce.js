class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        const discountAmount = this.price * (percent / 100);
        this.price = this.price - discountAmount;
    }

    // Method to return formatted product details
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Accessories"),
    new Product(3, "Keyboard", 800, "Computer Parts"),
    new Product(4, "Smartphone", 22000, "Electronics"),
];

products.forEach(prod => prod.applyDiscount(10));

const filteredProducts = products.filter(product => product.price > 1000);

// Print results to console
console.log("Products priced above ₹1000:");
filteredProducts.forEach(product => {
    console.log(product.getDetails());
});
