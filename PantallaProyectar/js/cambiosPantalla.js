
//boton de vuelta atras

var divClickable = document.getElementById('btn_back');
divClickable.addEventListener('click', function() {
    // Redirigir a otro sitio
    window.location.href = '../PantallaMenu/index.html';
});
// GESTION DE ENLACES //

// Para ir a la pantalla de apagar
var divClickable = document.getElementById('btn_power');
divClickable.addEventListener('click', function() {
    // Redirigir a otro sitio
    window.location.href = '../PantallaTransaccion/pantalla_animacion_apagar_sistema.html';
});

// Para ir a la pantalla de solo audio
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón "Solo audio"
    var proyectarButton = document.getElementById("btn_audio");

    // Agregar un event listener al botón
    proyectarButton.addEventListener("click", function () {
        // Mostrar la pantalla intermedia
        pantallaIntermediaProyectar();

        // Esperar 30 segundos antes de redirigir a otra página
        setTimeout(function () {
            // Redirigir a otra página HTML
            window.location.href = "../PantallaSoloAudio/index.html";
        }, 10000); // 10 segundos en milisegundos
    });
});
function pantallaIntermediaProyectar() {
    // Obtener el contenido HTML y los estilos CSS de la pantalla intermedia desde archivos externos
    Promise.all([
        fetch("../PantallaTransaccion/pantalla_animacion_proyector.html").then(response => response.text()),
        fetch("../PantallaTransaccion/css/style.css").then(response => response.text())
    ])
        .then(([html, css]) => {
            // Abrir una nueva ventana
            var nuevaVentana = window.open("", "_blank");

            // Escribir el contenido HTML y los estilos CSS en la nueva ventana
            nuevaVentana.document.write(`
            <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
            </body>
            </html>
        `);
            setTimeout(function () {
                nuevaVentana.close();
            }, 10000);
        })
        .catch(error => console.error("Error al cargar la pantalla intermedia:", error));
}

// Para ir a la pantalla de videoconferencia
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón "Solo audio"
    var videoConferenciaButton = document.getElementById("btn_video");

    // Agregar un event listener al botón
    videoConferenciaButton.addEventListener("click", function () {
        // Mostrar la pantalla intermedia
        pantallaIntermediaProyectar();

        // Esperar 30 segundos antes de redirigir a otra página
        setTimeout(function () {
            // Redirigir a otra página HTML
            window.location.href = "../PantallaVideoconferencia/index.html";
        }, 10000); // 10 segundos en milisegundos
    });
});



// Para ir a la pantalla de encender proyector
var divClickable = document.getElementById('btn_proyectar');
divClickable.addEventListener('click', function() {
    // Redirigir a otro sitio
    window.location.href = '../PantallaGestion/pantalla_animacion_apagar_proyector.html';
});

// Para ir a la pantalla de seleccionar fuente
var divClickable = document.getElementById('btn_fuente');
divClickable.addEventListener('click', function() {
    // Redirigir a otro sitio
    window.location.href = '../PantallaFuente/index.html';
});


// Para ir a la pantalla de configuracion audio
var divClickable = document.getElementById('confAudio-button');
divClickable.addEventListener('click', function() {
    // Redirigir a otro sitio
    window.location.href = '../PantallaControlAudio/index.html';
});

