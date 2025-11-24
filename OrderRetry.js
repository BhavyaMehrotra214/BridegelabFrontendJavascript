function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.5; 

            if (success) {
                resolve("Order submitted successfully");
            } else {
                reject("Order submission failed");
            }
        }, 1000);
    });
}