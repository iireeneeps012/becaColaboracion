window.addEventListener("load", function() {
    document.querySelector(".popup").style.display = "block"; // Mostrar el popup automáticamente cuando se carga la página
    setTimeout(function() {
        document.querySelector(".popup").style.display = "none"; // Ocultar el popup después de 10 segundos
    }, 10000);
});

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});