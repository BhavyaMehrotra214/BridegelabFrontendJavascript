"use strict";

const box = document.getElementById("box");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", (event) => {
    coords.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});

box.addEventListener("dblclick", (event) => {

    const rect = box.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dot = document.createElement("div");
    dot.className = "dot";

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    box.appendChild(dot);
});
