const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;

	if (username === '' || email === '' || password === '' || confirmPassword === '') {
		errorMessage.textContent = 'Please fill in all fields.';
		return;
	}

	if (password !== confirmPassword) {
		errorMessage.textContent = 'Passwords do not match.';
		return;
	}

    // To Do: Add validation for Username and email farmats

    // To Do: Send registration data to server-side script for processing

    alert('Registration successful');
});

