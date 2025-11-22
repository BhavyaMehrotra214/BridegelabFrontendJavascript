const user = {
    name: "Bhavya",

    showName: () => {
        console.log("Arrow Function Output:", this.name); // undefined
    }
};

user.showName();  // undefined


// ✔ Fixed using normal function
const userFixed = {
    name: "Bhavya",

    showName() {
        console.log("Normal Function Output:", this.name);
    }
};

userFixed.showName();