// Script for Contact
console.log('Contact loaded');


// ---------------- CONTACT FORM VALIDATION ------------------
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            msg.textContent = "Please fill in all fields.";
            msg.style.color = "red";
            return;
        }

        let emailCheck = /\S+@\S+\.\S+/;
        if (!emailCheck.test(email)) {
            msg.textContent = "Enter a valid email address.";
            msg.style.color = "red";
            return;
        }

        msg.textContent = "Message sent successfully!";
        msg.style.color = "green";

        form.reset();
    });
}
