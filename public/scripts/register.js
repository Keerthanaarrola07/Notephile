document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.querySelector('#registerForm button');

    submitBtn.addEventListener('click', function () {
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (firstName.trim() === '' || lastName.trim() === '' || username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        const userDetails = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        };

        window.location.href = 'notes.html';
    });

});
