document.addEventListener('DOMContentLoaded', function () {
    // Función para obtener parámetros de la URL
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Obtener parámetros de la URL
    var productName = getParameterByName('nombre');
    var productImage = getParameterByName('imagen');
    var productPrice = getParameterByName('precio');

    // Llenar dinámicamente la información del producto
    var productDetails = document.getElementById('producto-details');
    productDetails.innerHTML = `
        <h2>${productName}</h2>
        <img class="producto-imagen" src="${productImage}" alt="${productName}">
        <p>Precio: $${productPrice}</p>
    `;
});
