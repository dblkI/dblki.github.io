document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'pages/home.html';
    } else {
        alert('Credenciales incorrectas, intente nuevamente.');
    }
});

// Añadimos funcionalidad para "Olvidé mi contraseña"
document.getElementById('forgotPassword').addEventListener('click', function(e) {
    e.preventDefault();
    // Aquí podrías redirigir a otra página o abrir un modal
    alert('Redirigiendo a la página de recuperación de contraseña...');
    // window.location.href = 'pages/reset-password.html'; // Si tienes una página de recuperación
});
