function stage(name, callback) {
    setTimeout(() => {
        console.log(name);
        callback();
    }, 1000);
}

// Callback Hell (Pyramid of Doom)
function startPipelineWithCallbacks() {
    console.log("Starting pipeline (Callback Hell)...");

    stage(" Designing...", () => {
        stage("Building...", () => {
            stage(" Testing...", () => {
                stage("Deploying...", () => {
                    stage(" Celebrating!", () => {
                        console.log("Pipeline completed (Callback Hell)!");
                    });
                });
            });
        });
    });
}

startPipelineWithCallbacks();
