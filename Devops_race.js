function serverResponse(serverName, time) {
    return new Promise((resolve, reject) => {
        console.log(`${serverName} started...`);

        setTimeout(() => {
            const failed = Math.random() < 0.3; 

            if (failed) {
                reject(`${serverName} failed to deploy!`);
            } else {
                resolve(`${serverName} deployment completed.`);
            }

        }, time);
    });
}

// Server A → 2 seconds
const serverA = serverResponse("Server A", 2000);

// Server B → 3 seconds
const serverB = serverResponse("Server B", 3000);

//  Promise.race – First responder
Promise.race([serverA, serverB])
    .then((msg) => {
        console.log("Fastest response:", msg);
    })
    .catch((err) => {
        console.error(" Race error:", err);
    });

Promise.all([serverA, serverB])
    .then((results) => {
        console.log(" Deployment completed for all servers");
        console.table(results);
    })
    .catch((err) => {
        console.error("Deployment failed:", err);
    });
