function getBugs() {
    return new Promise((resolve, reject) => {
        console.log("Fetching bugs...");

        setTimeout(() => {
            const bugs = ["UI glitch", "API timeout", "Login failure"];

            // Simulate random API failure (30% chance)
            const failed = Math.random() < 0.3;

            if (failed) {
                reject("Failed to fetch bugs from server!");
            } else {
                resolve(bugs);
            }

        }, 1000);
    });
}

// Using the Promise-based function
getBugs()
    .then((bugs) => {
        console.log("Bug List Received:");
        console.table(bugs);   
    })
    .catch((error) => {
        console.error(error);  
    });
