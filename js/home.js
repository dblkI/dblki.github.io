// Seleccionamos el ícono de menú y el menú desplegable
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
const logoutBtn = document.getElementById('logoutBtn');

// Función para abrir/cerrar el menú al hacer clic en el ícono
menuIcon.addEventListener('click', function() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

// Función para cerrar sesión
logoutBtn.addEventListener('click', function() {
    // Redirigir al login
    window.location.href = '../index.html';
});
