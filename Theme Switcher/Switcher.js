"use strict";

const body = document.body;

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");

function applyTheme(themeName) {

    // Set custom attribute
    body.setAttribute("data-theme", themeName);

    body.className = "";            
    body.classList.add(themeName);  
}

lightBtn.addEventListener("click", () => applyTheme("light"));
darkBtn.addEventListener("click", () => applyTheme("dark"));
blueBtn.addEventListener("click", () => applyTheme("blue"));
