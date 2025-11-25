let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Display object on page load
displayUser();

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Read values
    let newName = document.getElementById("name").value.trim();
    let newEmail = document.getElementById("email").value.trim();
    let newAge = document.getElementById("age").value.trim();

    if (newName) user.name = newName;
    if (newEmail) user.email = newEmail;
    if (newAge) user.age = Number(newAge);

    // Show updated object
    displayUser();

    // Clear input fields
    document.getElementById("form").reset();
});

function displayUser() {
    document.getElementById("output").textContent =
        JSON.stringify(user, null, 2);
}
