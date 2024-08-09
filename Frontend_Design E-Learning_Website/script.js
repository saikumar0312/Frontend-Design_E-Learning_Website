document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the sign up and login buttons
    const signUpBtn = document.getElementById("signUpBtn");
    const loginBtn = document.getElementById("loginBtn");

    // Add event listener for sign up button
    signUpBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Here you can add your sign up logic, for example, displaying a sign up modal or redirecting to a sign up page
        console.log("Sign Up button clicked!");
    });

    // Add event listener for login button
    loginBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Here you can add your login logic, for example, displaying a login modal or redirecting to a login page
        console.log("Login button clicked!");
    });
});
