"use strict";

const steps = document.querySelectorAll(".step");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const summaryBox = document.getElementById("summaryBox");

let currentStep = 0;

function showStep(index) {
    steps.forEach(step => step.classList.remove("active"));
    steps[index].classList.add("active");

    backBtn.style.display = index === 0 ? "none" : "inline-block";
    nextBtn.textContent = index === steps.length - 1 ? "Finish" : "Next";
}

showStep(currentStep);

function validateStep() {

    // Step 1: Name
    if (currentStep === 0) {
        if (nameInput.value.trim().length < 2) {
            nameError.textContent = "Name must be at least 2 characters";
            return false;
        }
        nameError.textContent = "";
    }

    // Step 2: Email
    if (currentStep === 1) {
        const email = emailInput.value.trim();
        const validEmail = /^\S+@\S+\.\S+$/;

        if (!validEmail.test(email)) {
            emailError.textContent = "Enter a valid email";
            return false;
        }
        emailError.textContent = "";
    }

    // Step 3: Password
    if (currentStep === 2) {
        if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = "Password must be 6+ characters";
            return false;
        }
        passwordError.textContent = "";
    }

    return true;
}

nextBtn.addEventListener("click", () => {

    if (!validateStep()) return; 


    if (currentStep === steps.length - 1) {
        showSummary();
        return;
    }

    currentStep++;
    showStep(currentStep);
});

backBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

function showSummary() {
    summaryBox.style.display = "block";
    summaryBox.innerHTML = `
        <h3>Form Summary</h3>
        <p><strong>Name:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Password:</strong> ${"*".repeat(passwordInput.value.length)}</p>
    `;
    steps.forEach(s => s.style.display = "none");
    backBtn.style.display = "none";
    nextBtn.style.display = "none";
}
