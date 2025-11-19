function aplicarColoresAleatorios() {
    const colores = ["green", "blue", "red"];
    
    // Seleccionar SOLO elementos h5
    const elementos = document.querySelectorAll('h5');
    
    elementos.forEach(elemento => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        elemento.style.color = colorAleatorio;
    });
}

document.querySelectorAll('h5').forEach(h5 => {
                h5.addEventListener('click', aplicarColoresAleatorios);
            });
