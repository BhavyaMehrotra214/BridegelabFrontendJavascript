function validateLogin() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");

    let userRegex = /^.{5,}$/;

   
    let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!userRegex.test(user)) {
        msg.style.color = "red";
        msg.textContent = "Username must be at least 5 characters.";
        return;
    }

    if (!passRegex.test(pass)) {
        msg.style.color = "red";
        msg.innerHTML = `
             Password must contain:<br>
            • 8 characters<br>
            • Uppercase letter<br>
            • Lowercase letter<br>
            • Number<br>
            • Special character
        `;
        return;
    }

    msg.style.color = "green";
    msg.textContent = " Login Successful!";
}
