//SCRIPT FOR THE LOGIN PROCESS.

// Function that checks that the user has a valid email
// and password input

const singUpForm = document.getElementById("signUpForm");
const emailField = document.getElementById("email");
const password = document.getElementById("password");
const okButton = document.getElementById("login-button");

password.addEventListener("keyup", function(event) {
    isValidEmail = emailField.checkValidity();
    isValidPassword = password.checkValidity();

    
    if (isValidEmail && isValidPassword) {
        okButton.disabled = false;
        okButton.style.cursor = "pointer";
        okButton.style.opacity = "1";
    }
    else {
        okButton.disabled = true;
    };
});

okButton.addEventListener('click', function(event) {
    singUpForm.submit();
})


