"use strict";

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () => {
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
});

dropdownMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("option")) {
        dropdownBtn.textContent = e.target.textContent;
        dropdownMenu.style.display = "none";
    }
});


document.addEventListener(
    "click",
    (e) => {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    },
    true 
);
