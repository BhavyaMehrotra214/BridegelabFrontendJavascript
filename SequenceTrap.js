"use strict";

// 1. var is hoisted → undefined
console.log(score);   // undefined

announce();            

var score = 50;

function announce() {
  console.log("Game started");
}

let status = "ready";

startGame();           // ready

function startGame() {
  console.log(status);
}
