"use strict";

function demo(a, b) {   
  let total = 10;      
  console.log("Total =", total);

  let obj = { x: 100 };
  delete obj.x;         

  console.log("Property deleted from obj");
}

demo(5, 10);
