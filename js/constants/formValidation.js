document.getElementById("contact-form")
document.addEventListener("submit", function (validate) {
    validate.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name.length < 5) {
            alert("Your name is " + name.length + " character long. Name should be more than 5 characters long.");
            return;
        }

        var emailCheck = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if (!emailCheck.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (subject.length < 15) {
            alert("Your subject is " + subject.length + " character long. Subject should be more than 15 characters long.");
            return;
        }

        if (message.length < 25) {
            alert("Your message is " + message.length + " character long. Message should be more than 25 characters long.");
            return;
        }

        alert("Thank you for your feedback!");
    });