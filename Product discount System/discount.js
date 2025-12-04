// Constructor Function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype Method for Discount
Product.prototype.applyDiscount = function(percent) {
    const discountAmount = (this.price * percent) / 100;
    const newPrice = this.price - discountAmount;
    return newPrice;
};


const p1 = new Product("Laptop", 60000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Smartwatch", 5000);

console.log("Laptop after 10% off:", p1.applyDiscount(10));
console.log("Headphones after 20% off:", p2.applyDiscount(20));
console.log("Smartwatch after 15% off:", p3.applyDiscount(15));
