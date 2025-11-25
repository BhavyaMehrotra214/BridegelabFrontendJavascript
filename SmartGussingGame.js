"use strict";   
const secretNumber = Math.floor(Math.random() * 50) + 1;

const userGuess = 23;


let message = "";

if (userGuess === secretNumber) {
    message = "Correct guess!";
} 
else {
    
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        message = "Very close!";
    } 
    else {

        if (userGuess > secretNumber) {
            message = "Too high";
        } else {
            message = "Too low";
        }
    }
}

console.log("----- Smart Guessing Game -----");
console.log(`Secret Number: ${secretNumber}`);
console.log(`Your Guess: ${userGuess}`);
console.log(`Result: ${message}`);
