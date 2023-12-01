document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', function () {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username.trim() === '' || password.trim() === '') {
          alert('Please enter both username and password.');
          return;
      }
      window.location.href = 'notes.html';
  });
});