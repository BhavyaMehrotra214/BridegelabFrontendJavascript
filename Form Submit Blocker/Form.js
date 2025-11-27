"use strict";

const form = document.getElementById("myForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMsg = document.getElementById("successMsg");


function validate() {
    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain @";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    return isValid;
}

// --------------------------------------
// BLOCK FORM SUBMISSION IF INVALID
// --------------------------------------
form.addEventListener("submit", (event) => {
    event.preventDefault(); // always stop default

    if (validate()) {
        successMsg.style.display = "block";
        form.reset();
    } else {
        successMsg.style.display = "none";
    }
});


[nameInput, emailInput, passwordInput].forEach((input) => {
    input.addEventListener("input", validate);
});
