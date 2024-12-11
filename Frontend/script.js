const express = require('express')
const app = express();

const signupForm = document.getElementById('Signup');

signupForm.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(signupForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('/Signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Signup successful!');
        } else {
            const error = await response.text();
            alert(`Error: ${error}`);
        }
    } catch (err) {
        console.error('Error during signup:', err);
        alert('An unexpected error occurred.');
    }
});


