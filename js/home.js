let map;
let markers = [];
let polygon = null;
let drawingManager;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 19.4326, lng: -99.1332 },
        zoom: 10,
    });

    document.getElementById("btnAddMarker").addEventListener("click", addMarker);
    document.getElementById("btnDrawPolygon").addEventListener("click", enableDrawingMode);
    document.getElementById("btnClearMap").addEventListener("click", clearMap);
    document.getElementById("btnGenerateKeylines").addEventListener("click", generateKeylines); // Botón para generar keylines

    drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: null,
        drawingControl: false,
        polygonOptions: {
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            strokeWeight: 2,
            strokeColor: '#FF0000',
            clickable: true,
            editable: true,
            zIndex: 1,
        },
    });

    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'polygoncomplete', (poly) => {
        if (polygon) {
            polygon.setMap(null);
        }
        polygon = poly;
        drawingManager.setDrawingMode(null);
    });
}

function enableDrawingMode() {
    drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
}

function addMarker() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map.setCenter(userLocation);
                map.setZoom(14);

                const marker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "Tu ubicación",
                });

                markers.push(marker);
            },
            () => {
                alert("Error: No se pudo obtener la ubicación.");
            }
        );
    } else {
        alert("Error: Tu navegador no soporta la geolocalización.");
    }
}

function clearMap() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];

    if (polygon) {
        polygon.setMap(null);
        polygon = null;
    }
}

// Función para generar las keylines
// ... Código anterior ...

function generateKeylines() {
    if (!polygon) {
        alert("Primero debes dibujar un polígono.");
        return;
    }

    // Obtenemos las coordenadas del polígono
    const path = polygon.getPath();
    let coordinates = [];
    for (let i = 0; i < path.getLength(); i++) {
        const latLng = path.getAt(i);
        coordinates.push({ lat: latLng.lat(), lng: latLng.lng() });
    }

    // Confirmación por parte del usuario
    const confirmation = confirm("¿Confirmas que estas son las coordenadas correctas?");
    if (confirmation) {
        console.log("Coordenadas del polígono:", coordinates); // Imprimir coordenadas en la consola

        // Ocultamos el mapa y mostramos el mensaje de carga
        document.getElementById("map").style.display = "none";
        document.getElementById("loading").style.display = "flex";

        // Simular la generación de keylines con un tiempo de espera
        setTimeout(() => {
            alert("Keylines generadas con éxito.");

            // Mostrar el botón para enviar ruta a Google Maps
            document.getElementById("btnSendRoute").style.display = "block";

            // Restauramos el mapa y ocultamos el mensaje de carga
            document.getElementById("map").style.display = "block";
            document.getElementById("loading").style.display = "none";
        }, 3000); // Simulamos un proceso de 3 segundos
    }
}

// Función para enviar ruta a Google Maps
document.getElementById("btnSendRoute").addEventListener("click", function() {
    if (!polygon) {
        alert("No se ha generado ninguna keyline. Dibuja un polígono primero.");
        return;
    }

    // Obtenemos las coordenadas del polígono
    const path = polygon.getPath();
    let waypoints = [];
    for (let i = 0; i < path.getLength(); i++) {
        const latLng = path.getAt(i);
        waypoints.push(latLng.lat() + ',' + latLng.lng());
    }

    // Crear URL para Google Maps
    const origin = waypoints[0]; // Usamos el primer punto como origen
    const destination = waypoints[waypoints.length - 1]; // Usamos el último punto como destino
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints.slice(1, -1).join('|')}&travelmode=driving`;

    // Abrir la URL de Google Maps en una nueva pestaña
    window.open(url, '_blank');
});


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

