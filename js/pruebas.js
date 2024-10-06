function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 19.4326, lng: -99.1332 },  // Coordenadas de CDMX
      zoom: 12,
    });

    // Coordenadas para el rectángulo
    const bounds = {
      north: 19.4426,
      south: 19.4226,
      east: -99.1232,
      west: -99.1532
    };

    // Definición del rectángulo
    const rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: true,  // Permite que el usuario lo edite
      draggable: true,  // Permite que el usuario lo arrastre
      map: map,
    });
  }