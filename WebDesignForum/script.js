document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let username = document.getElementById('username').value;
    let password = document.getElementById('pass').value;
    let confirmPassword = document.getElementById('confirm-pass').value;
    let email = document.getElementById('e-mail').value;
    let bdate = document.getElementById('bdate').value;
    let errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if (!username || !password || !confirmPassword || !email || !bdate) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    errorMessage.textContent = 'Registration successful!';
});

function validateEmail(email) {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}