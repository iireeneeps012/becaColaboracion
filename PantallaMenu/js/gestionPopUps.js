//PopUp de la carga de pantalla
window.addEventListener("load", function () {
    var overlay = document.querySelector(".overlay");
    var popup = document.querySelector(".popupCarga");

    popup.style.display = "block"; // Mostrar el popup automáticamente cuando se carga la página

    setTimeout(function () {
        popup.style.display = "none"; // Ocultar el popup después de 10 segundos
        overlay.style.display = "none"; // Ocultar el overlay
    }, 10000);

    // Mostrar el overlay
    overlay.style.display = "block";
});


// Para ir a la pantalla

window.addEventListener("load", function () {
    var overlay = document.querySelector(".overlay");
    var popup = document.getElementById("PopUpApagar");
    var btnApagar = document.getElementById("btn_power");
    var btnSi = document.querySelector(".btnSi");
    var btnNo = document.querySelector(".btnNo");

    // Función para mostrar el popup
    function mostrarPopup() {
        popup.style.display = "block";
        overlay.style.display = "block";
    }

    // Función para ocultar el popup
    function ocultarPopup() {
        popup.style.display = "none";
        overlay.style.display = "none";
    }

    // Mostrar el popup cuando se hace clic en el botón de encendido
    btnApagar.addEventListener("click", function () {
        mostrarPopup();
    });

    // Evento clic para el botón "Si"
    btnSi.addEventListener("click", function () {
        // Redireccionar a otra página cuando se hace clic en "Si"
        window.location.href = '../PantallaInicio/index.html';
    });

    // Evento clic para el botón "No"
    btnNo.addEventListener("click", function () {
        // Ocultar el popup cuando se hace clic en "No"
        ocultarPopup();
    });

});




