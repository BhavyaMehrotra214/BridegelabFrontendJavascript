function step(name, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000; 
        console.log(`${name} started...`);

        setTimeout(() => {
            const failed = Math.random() < 0.3; 
            if (failed) {
                reject(`${name} failed!`);
            } else {
                resolve(successMessage);
            }
        }, delay);
    });
}

// All delivery steps
function takeOrder()   { return step("Take Order",    "Step 1: Order taken"); }
function prepare()     { return step("Prepare Food",  "Step 2: Food prepared"); }
function pack()        { return step("Pack Order",    "Step 3: Package ready"); }
function dispatch()    { return step("Dispatch",      "Step 4: Out for delivery"); }
function deliver()     { return step("Deliver",       "Delivery completed!"); }


async function runPipeline() {
    console.log("=== Start Pipeline ===");

    try {
        const step1 = await takeOrder();
        console.log(step1);

        const step2 = await prepare();
        console.log(step2);

        const step3 = await pack();
        console.log(step3);

        const step4 = await dispatch();
        console.log(step4);

        const step5 = await deliver();
        console.log(step5);

        console.log("Pipeline finished successfully!");

    } catch (error) {
        // If ANY promise rejects, control immediately jumps here
        console.error("Pipeline failed!");
        console.error("Reason:", error);
    }
}
runPipeline();
