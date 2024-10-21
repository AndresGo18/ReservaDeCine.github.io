const emailForm = document.getElementById('emailForm');
const messageDiv = document.getElementById('message');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const emailInput = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        messageDiv.textContent = 'Email válido.';
        messageDiv.style.color = 'green';
        window.location.href = '/index.html'

    } else {
        messageDiv.textContent = 'Email no válido.';
        messageDiv.style.color = 'red';
    }
})