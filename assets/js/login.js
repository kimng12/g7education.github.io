document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready.');

    // Mock user credentials (for demonstration purposes)
    var mockUser = {
        email: 'user@example.com',
        password: 'password1234'
    };

    // Function to validate form fields
    function validateForm() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var validationMessage = document.getElementById('validation-message');

        console.log('Validating form:', email, password);

        if (email === '' || password === '') {
            validationMessage.innerText = 'Please enter both email and password.';
            validationMessage.style.color = 'red';
            console.log('Validation failed: Fields are empty.');
            return false;
        }

        // Simulating authentication check
        if (email === mockUser.email && password === mockUser.password) {
            console.log('Validation successful: Credentials are correct.');
            return true;
        } else {
            validationMessage.innerText = 'Incorrect email or password.';
            validationMessage.style.color = 'red';
            console.log('Validation failed: Incorrect credentials.');
            return false;
        }
    }

    // Handling form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            console.log('Form is valid, redirecting to homepage...');
            window.location.href = 'student/index-2.html'; // Replace with your actual homepage URL
        } else {
            console.log('Form validation failed.');
        }
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
