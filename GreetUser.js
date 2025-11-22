function showEndMessage() {
    console.log("Welcome to the course!");
}

// Step 2: Function with callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Step 3: Now execute the callback
    callback();
}

// Step 4: Call the function to demonstrate callback flow
greetUser("Bhavya", showEndMessage);