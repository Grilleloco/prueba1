// homepage.js

$(document).ready(function(){
    // Configurar el mapa
    var map = L.map('map').setView([32.5055, -116.8666], 16); // Configura las coordenadas iniciales y el nivel de zoom

    // Agregar un mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Marcador en la ubicación del negocio (coordenadas de ejemplo)
    var negocioMarker = L.marker([32.5055, -116.8666]).addTo(map);
    negocioMarker.bindPopup('<b>Panaderia y Pasteleria</b>').openPopup();
});
$(document).ready(function(){
    $('.slick-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
    });
});

// Configuración de navegación con teclado
            $(document).on('keydown', function(e){
                if (e.keyCode === 37) { // Flecha izquierda
                    $('.slick-carousel').slick('slickPrev');
                } else if (e.keyCode === 39) { // Flecha derecha
                    $('.slick-carousel').slick('slickNext');
                }
            });

             // Manejar clics en enlaces de productos
    $('.product-link').click(function(e){
        e.preventDefault(); // Evita que el enlace realice la acción por defecto (navegar a la URL)
        
        // Obtener el ID del producto
        var productId = $(this).data('product-id');

        // Redirigir a la página de detalles del producto (ajusta la URL según tu estructura)
        window.location.href = 'detalle_producto.html?id=' + productId;
    });






