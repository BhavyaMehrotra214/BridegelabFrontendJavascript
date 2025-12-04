const form = document.getElementById("registrationForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  messageDiv.textContent = "";
  messageDiv.className = "message";

  // Check if email already exists
  axios.get(`http://localhost:3008/users?email=${encodeURIComponent(email)}`)
    .then(res => {
      if(res.data.length > 0) {
        messageDiv.textContent = "Email already registered.";
        messageDiv.classList.add("error");
      } else {
        // Email not found, register user
        axios.post("http://localhost:3008/users", { name, email })
          .then(postRes => {
            messageDiv.textContent = "Registration successful!";
            messageDiv.classList.add("success");
            form.reset();
          })
          .catch(err => {
            console.error(err);
            messageDiv.textContent = "Failed to register user.";
            messageDiv.classList.add("error");
          });
      }
    })
    .catch(err => {
      console.error(err);
      messageDiv.textContent = "Error checking email.";
      messageDiv.classList.add("error");
    });
});
