document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready.');
    // Mock user credentials for two different roles
    var users = [
        {
            email: 'student@example.com',
            password: 'password123',
            role: 'student'
        },
        {
            email: 'tutor@example.com',
            password: 'password123',
            role: 'tutor'
        }
    ];

    // Function to validate form fields
    function validateForm() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var validationMessage = document.getElementById('validation-message');

        console.log('Validating form:', email, password);

        // Check if credentials match any user
        var user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            validationMessage.innerText = 'Incorrect email or password.';
            validationMessage.style.color = 'red';
            console.log('Validation failed: Incorrect credentials.');
            return false;
        }

        console.log('Validation successful: Credentials are correct.');
        // Redirect based on user role
        if (user.role === 'student') {
            window.location.href = 'student/index-2.html';
        } else if (user.role === 'tutor') {
            window.location.href = 'tutor/Tutor-dashboard.html';
        }

        return true;
    }

    // Handling form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        validateForm();
    }

    // Adding event listener to the form submit button
    var loginForm = document.getElementById('login-form');
    if (loginForm) {
        console.log('Adding event listener to form.');
        loginForm.addEventListener('submit', handleFormSubmit);
    } else {
        console.log('Login form not found.');
    }
});
