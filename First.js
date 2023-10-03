// First_Sheet_JS
var passwordField = document.getElementById("password");
var showButton = document.getElementById("show-btn");

showButton.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        showButton.textContent = "Hide";
    } else {
        passwordField.type = "password";
        showButton.textContent = "Show";
    }
});