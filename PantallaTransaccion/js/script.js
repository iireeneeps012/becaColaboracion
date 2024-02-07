// Función para cerrar la ventana emergente y otras ventanas del mismo proyecto
function cerrarVentanas() {
    // Cierra la ventana emergente
    window.close();
}

// Llama a la función para cerrar la ventana emergente y otras ventanas después de 5000 milisegundos (5 segundos)
setTimeout(cerrarVentanas, 5000);
