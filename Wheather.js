"use strict";   
const temperature = 28;     
const isRaining = false;    
const windSpeed = 15;       

let message = "";

// Step 1: Check conditions using logical operators
if (isRaining === true) {
    message = "Stay indoors with hot coffee.";
}
else if (temperature > 35) {
    message = "Go swimming.";
}
else if (temperature < 15 && windSpeed > 20) {
    message = "Too cold and windy — stay home.";
}
else {
    message = "Perfect day for a walk.";
}

// Step 2: Display advice
console.log("----- Weather Activity Planner -----");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Advice: ${message}`);
