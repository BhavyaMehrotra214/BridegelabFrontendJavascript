"use strict";   
const userName = "Bhavya";  

// Get current hour (0–23)
const currentHour = new Date().getHours();

// Variable to store final greeting message
let greetingMessage = "";

if (currentHour < 12) {
    greetingMessage = `Good Morning, ${userName}!`;
} 
else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = `Good Afternoon, ${userName}!`;
} 
else {
    greetingMessage = `Good Evening, ${userName}!`;
}

console.log(greetingMessage);