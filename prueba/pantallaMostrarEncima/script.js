function mostrarSuperior() {
    var fondo = document.getElementById("fondo");
    var superior = document.getElementById("superior");

    // Mostrar la pantalla de fondo y la pantalla superior
    fondo.style.display = "block";
    superior.style.display = "block";
}

function cerrarSuperior() {
    var fondo = document.getElementById("fondo");
    var superior = document.getElementById("superior");

    // Ocultar solo la pantalla superior
    fondo.style.display = "none";
    superior.style.display = "none";
}
