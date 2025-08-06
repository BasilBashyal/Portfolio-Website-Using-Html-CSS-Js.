function validateForm() {
    const name = document.forms["contactForm"]["name"].value.trim();
    const email = document.forms["contactForm"]["email"].value.trim();
    const message = document.forms["contactForm"]["message"].value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return false;
    }

    // Basic email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you for your message, " + name + "! I will get back to you soon.");
    return true;
}
