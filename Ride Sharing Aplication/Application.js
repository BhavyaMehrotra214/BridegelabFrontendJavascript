class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Child Class: Driver
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip Class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance is required.");
        }

        if (this.distance < 0) {
            throw new Error("Distance cannot be negative.");
        }

        const ratePerKm = 15; // ₹15 per km
        return this.distance * ratePerKm;
    }
}

// -----------------------------
// TESTING WITH try/catch
// -----------------------------

try {
    const driver = new Driver("Ravi", 4.9, "Honda City");
    const trip1 = new Trip("Delhi", "Noida", 12);

    console.log(`Driver: ${driver.name}, Vehicle: ${driver.vehicle}`);
    console.log(`Fare for Trip 1: ₹${trip1.calculateFare()}`);
} 
catch (err) {
    console.log("Error:", err.message);
}

console.log("------ Second Test ------");

try {
    const trip2 = new Trip("Delhi", "Gurgaon", -5);  // ❌ negative distance
    console.log(`Fare for Trip 2: ₹${trip2.calculateFare()}`);
}
catch (err) {
    console.log("Error:", err.message);
}
