class Cart {
    constructor() {
        this.items = [];
    }

    // Add item to cart
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    // Calculate total amount
    getTotal() {
        return this.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
    }

    // Validate and apply coupon
    applyCoupon(code) {
        const regex = /^(SAVE|DISC)(\d{2})$/;   

        if (!regex.test(code)) {
            console.log("Invalid Coupon Format");
            return this.getTotal();
        }

        // Extract number from coupon
        const discountPercent = parseInt(code.match(/\d+/)[0]);

        const total = this.getTotal();
        const discountAmount = (total * discountPercent) / 100;
        const finalTotal = total - discountAmount;

        console.log(`🎉 Coupon Applied: ${discountPercent}% OFF`);
        return finalTotal;
    }
}

const cart = new Cart();
cart.addItem("Shoes", 2000, 1);
cart.addItem("T-Shirt", 800, 2);
cart.addItem("Watch", 1500, 1);

console.log("Cart Total:", cart.getTotal());

// Applying coupon
console.log("Final Total:", cart.applyCoupon("SAVE20"));

