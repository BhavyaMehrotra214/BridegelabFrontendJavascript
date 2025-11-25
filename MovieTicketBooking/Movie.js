const form = document.getElementById("ticketForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const seatsInput = document.getElementById("seats");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const seatError = document.getElementById("seatError");

const ticketDiv = document.getElementById("ticket");

// Validation styling
function setStatus(input, msg, isValid, errorDiv) {
    if (isValid) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorDiv.textContent = "";
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        errorDiv.textContent = msg;
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValidForm = true;

    // -------------------------
    // Name Validation
    // -------------------------
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(nameInput.value)) {
        setStatus(nameInput, "Name must contain alphabets only.", false, nameError);
        isValidForm = false;
    } else {
        setStatus(nameInput, "", true, nameError);
    }

    // -------------------------
    // Email Validation
    // -------------------------
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        setStatus(emailInput, "Enter a valid email.", false, emailError);
        isValidForm = false;
    } else {
        setStatus(emailInput, "", true, emailError);
    }

    // -------------------------
    // Seats Validation (1–10 only)
    // -------------------------
    const seats = Number(seatsInput.value);
    if (seats < 1 || seats > 10) {
        setStatus(seatsInput, "Seats must be between 1 and 10.", false, seatError);
        isValidForm = false;
    } else {
        setStatus(seatsInput, "", true, seatError);
    }

    // If valid → create booking object & show ticket
    if (isValidForm) {
        const booking = {
            name: nameInput.value,
            email: emailInput.value,
            seats: seatsInput.value
        };


        ticketDiv.style.display = "block";
        ticketDiv.innerHTML = `
            <h3>Your Ticket</h3>
            <p><strong>Name:</strong> ${booking.name}</p>
            <p><strong>Email:</strong> ${booking.email}</p>
            <p><strong>Seats:</strong> ${booking.seats}</p>
        `;
    }
});
