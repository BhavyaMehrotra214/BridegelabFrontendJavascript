const form = document.getElementById("studentForm");

// Inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

// Error message divs
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");

function setStatus(input, errorMessage, isValid, errorDiv) {
    if (isValid) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorDiv.textContent = "";
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        errorDiv.textContent = errorMessage;
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isFormValid = true;
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(nameInput.value)) {
        setStatus(nameInput, "Name must contain only alphabets.", false, nameError);
        isFormValid = false;
    } else {
        setStatus(nameInput, "", true, nameError);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        setStatus(emailInput, "Enter a valid email (example@domain.com).", false, emailError);
        isFormValid = false;
    } else {
        setStatus(emailInput, "", true, emailError);
    }


    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        setStatus(phoneInput, "Phone must be exactly 10 digits.", false, phoneError);
        isFormValid = false;
    } else {
        setStatus(phoneInput, "", true, phoneError);
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;
    if (!passwordRegex.test(passwordInput.value)) {
        setStatus(
            passwordInput,
            "Password must contain 1 uppercase, 1 number, 1 special character.",
            false,
            passwordError
        );
        isFormValid = false;
    } else {
        setStatus(passwordInput, "", true, passwordError);
    }

    if (isFormValid) {
        alert("Form Submitted Successfully!");
    }
});
