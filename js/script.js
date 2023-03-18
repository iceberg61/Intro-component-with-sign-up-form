let form = document.getElementById('form'),
    firstName = document.getElementById('First-Name'),
    lastName = document.getElementById('Last-Name'),
    email = document.getElementById('email'),
    // iconError = document.getElementById('icon-error'),
    password = document.getElementById('password'),
    error = document.getElementById('submit'),
    patterns = /^[^ ]+@[^ ]*\.[a-z]{3,4}$/;

email.addEventListener('input', validateEmail) 
function validateEmail() {
    if (!email.value.match(patterns)) {
        const emailError = document.getElementById('email-error');
        emailError.innerHTML = "Looks like this is not an email";
        iconError.src = '../images/icon-error.svg'
        email.classList.add('error');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (firstName.value.trim() === '' || firstName.value === null) {
        const firstNameText = document.getElementById('first-name-error');
        firstNameText.innerHTML = "First name cannot be empty";
        // iconError.src = '../images/icon-error.svg'
    }

    if (lastName.value.trim() === '' || lastName.value === null) {
        const lastNameText = document.getElementById('last-name-error');
        lastNameText.innerHTML = "Last name cannot be empty";
    }

    if(password.value.length <= 6) {
        const passwordError = document.getElementById('password-error');
        passwordError.innerHTML = "password must be more than 6 characters";
    }
});
