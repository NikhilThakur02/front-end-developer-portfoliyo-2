document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (validateForm(name, email, message)) {

            // If the form is valid, you can send the data to a server or display a success message////////////////////////////////////////////////////////




            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);
            displaySuccessMessage();
            form.reset();
        }
    });

    function validateForm(name, email, message) {
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return false;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function displaySuccessMessage() {
        alert("Your message has been sent successfully!");
    }
});
