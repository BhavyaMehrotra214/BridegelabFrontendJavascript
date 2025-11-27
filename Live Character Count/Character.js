"use strict";

const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX_LIMIT = 100;

textInput.addEventListener("keydown", (event) => {
    const textLength = textInput.value.length;

    if (textLength >= MAX_LIMIT && event.key !== "Backspace" && event.key !== "Delete") {
        event.preventDefault();
    }
});


textInput.addEventListener("input", () => {
    const charsUsed = textInput.value.length;
    const remaining = MAX_LIMIT - charsUsed;

    counter.textContent = `${remaining} characters remaining`;

    // Color logic
    if (remaining <= 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "goldenrod"; 
    } else {
        counter.style.color = "black";
    }
});

resetBtn.addEventListener("click", () => {
    textInput.value = "";
    counter.textContent = `${MAX_LIMIT} characters remaining`;
    counter.style.color = "black";
});
