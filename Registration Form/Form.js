$(document).ready(function () {

    let existingEmails = ["test@gmail.com", "hello@yahoo.com", "user@domain.com"];

    $("#regForm").submit(function (e) {
        e.preventDefault(); 

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        $("input").removeClass("error");
        $("#message").html("");

        let isValid = true;

        if (name === "") {
            $("#name").addClass("error");
            isValid = false;
        }

        // 2️ Validate Email Format
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $("#email").addClass("error");
            isValid = false;
        }

        //Email Uniqueness Check
        if (existingEmails.includes(email.toLowerCase())) {
            $("#email").addClass("error");
            $("#message").html(`<p style='color:red;'>Email already exists!</p>`);
            isValid = false;
        }

        //  Validate Password - minimum 8 chars
        if (password.length < 8) {
            $("#password").addClass("error");
            isValid = false;
        }

        //  Success Message
        if (isValid) {
            $("#message").html(`
                <div class='successMsg'>
                    Registration successful!
                </div>
            `);

            existingEmails.push(email.toLowerCase());

            $("#name, #email, #password").val("");
        }
    });

});
