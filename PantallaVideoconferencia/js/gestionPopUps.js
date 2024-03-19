//PopUp de la carga de pantalla de transición
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


// Para ir a la pantalla de apagado sistema
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

// Para ir a la pantalla de enceder proyeccto
window.addEventListener("load", function () {
    var overlay = document.querySelector(".overlay");
    var popup = document.getElementById("PopUpEncender");
    var btnProyector = document.getElementById("btn_encd_proyector");
    var btnAtras = document.getElementById("btnSalir");

    function mostrarPopup() {
        popup.style.display = "block";
        overlay.style.display = "block";
    }

    function ocultarPopup() {
        popup.style.display = "none";
        overlay.style.display = "none";
    }

    btnProyector.addEventListener("click", function () {
        mostrarPopup();
    });
    btnAtras.addEventListener("click", function () {
        ocultarPopup();
    });

});

// Para la pantalla de fuente
window.addEventListener("load", function () {
    var overlay = document.querySelector(".overlay");
    var popup = document.getElementById("PopUpFuente");
    var btnFuente = document.getElementById("btn_fuente");
    var btnEncender = document.getElementById("btnEncender");
    var btnSalir = document.getElementById("btnBack");

    function mostrarPopup() {
        popup.style.display = "block";
        overlay.style.display = "block";
    }

    function ocultarPopup() {
        popup.style.display = "none";
        overlay.style.display = "none";
    }

    btnFuente.addEventListener("click", function () {
        mostrarPopup();
    });

    btnEncender.addEventListener("click", function () {
        // Redireccionar a otra página cuando se hace clic en "Si"
        window.location.href = '../PantallaInicio/index.html';
    });
    btnSalir.addEventListener("click", function () {
        ocultarPopup();
    });

});

// Para la pantalla de grabar
window.addEventListener("load", function () {
    var overlay = document.querySelector(".overlay");
    var popup = document.getElementById("PopUpGrabar");
    var btnGrabar = document.getElementById("btn_grabar");
    var btnIniciar = document.getElementById("btnIniciar");
    var btnCancelar = document.getElementById("btnCancelar");

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
    btnGrabar.addEventListener("click", function () {
        mostrarPopup();
    });

    // Evento clic para el botón "Si"
    btnIniciar.addEventListener("click", function () {
        // Redireccionar a otra página cuando se hace clic en "Si"
        ocultarPopup();
    });

    // Evento clic para el botón "No"
    btnCancelar.addEventListener("click", function () {
        // Ocultar el popup cuando se hace clic en "No"
        ocultarPopup();
    });

});

// Para la pantalla de Teams

window.addEventListener("load", function () {
    var overlay = document.querySelector(".overlay");
    var popup = document.getElementById("PopUpTeams");
    var btnTeams = document.getElementById("btnTeams");
    var btnAtras = document.getElementById("btnVueltaAtras");

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
    btnTeams.addEventListener("click", function () {
        mostrarPopup();
    });


    // Evento clic para el botón "No"
    btnAtras.addEventListener("click", function () {
        // Ocultar el popup cuando se hace clic en "No"
        ocultarPopup();
    });

});
