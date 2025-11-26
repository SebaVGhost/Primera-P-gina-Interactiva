// ESPERAR QUE EL CONTENIDO DEL DOCUMENTO CARGUE
document.addEventListener('DOMContentLoaded', () => {

    // LISTA DE COLORES PERMITIDOS
    const colores = ["green", "blue", "red"];

    // SELECCIONAR TODAS LAS ETIQUETAS H5
    const etiquetasH5 = document.querySelectorAll("h5")

    // RECORRER CADA H5 Y AGREGAR EL EVENTO CLICK
    etiquetasH5.forEach(h5 => {
        h5.addEventListener('click', () => {
            // SELECCIONAR UN COLOR ALEATORIO DE LA LISTA
            const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            h5.style.color = colorAleatorio;
        });
    });

});


