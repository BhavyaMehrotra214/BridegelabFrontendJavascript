"use strict";

const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

let currentlyEditing = null; 

addBtn.addEventListener("click", () => {
    const name = productInput.value.trim();

    if (name === "") return;

    createProductItem(name);
    productInput.value = "";
});

function createProductItem(name) {
    const li = document.createElement("li");

    li.innerHTML = `
        <span class="title">${name}</span>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    productList.appendChild(li);
}


productList.addEventListener("click", (event) => {
    const target = event.target;
    const li = target.closest("li");

    // DELETE
    if (target.classList.contains("delete-btn")) {
        li.remove();
    }

    if (target.classList.contains("edit-btn")) {
        enableEditMode(li);
    }
});


function enableEditMode(li) {
    if (currentlyEditing && currentlyEditing !== li) {
        saveEdit(currentlyEditing);
    }

    currentlyEditing = li;

    const titleSpan = li.querySelector(".title");
    const originalText = titleSpan.textContent;

    // Replace text with input
    titleSpan.innerHTML = `
        <input class="edit-input" type="text" value="${originalText}" />
    `;

    const input = titleSpan.querySelector("input");
    input.focus();

    // Save when pressing Enter
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            saveEdit(li);
        }
    });
}

function saveEdit(li) {
    if (!li) return;

    const input = li.querySelector("input");

    if (input) {
        let newText = input.value.trim();
        if (newText === "") newText = "Untitled";

        li.querySelector(".title").textContent = newText;
    }

    currentlyEditing = null;
}

document.addEventListener("click", (e) => {
    if (!currentlyEditing) return;

    if (currentlyEditing.contains(e.target)) return;

    saveEdit(currentlyEditing);
});
