"use strict";

function outer() {
  debugger;
  let count = 5;
  console.log("Outer:", count);

  const inner = () => {
    debugger;
    console.log("Inner:", count);
  };

  inner();
}

outer();
