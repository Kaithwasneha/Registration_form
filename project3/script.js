document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageElement = document.getElementById('message');
    
    if (password !== confirmPassword) {
        messageElement.textContent = "Passwords do not match.";
    } else {
        messageElement.textContent = `Registration successful!\nUsername: ${username}\nEmail: ${email}`;
    }
});
