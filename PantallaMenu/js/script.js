// GESTION DE ENLACES //

// Para ir a la pantalla de apagar
var divClickable = document.getElementById('button2');
divClickable.addEventListener('click', function() {
    // Redirigir a otro sitio
    window.location.href = '../PantallaTransaccion/pantalla_animacion_apagar_sistema.html';
    setTimeout(function() {
        window.close();
    }, 9000);
});

// Para ir a la solo audio
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón "Solo audio"
    var soloAudioButton = document.getElementById("button3");

    // Agregar un event listener al botón
    soloAudioButton.addEventListener("click", function () {
        // Mostrar la pantalla intermedia
        pantallaIntermediaSoloAudio();

        // Esperar 30 segundos antes de redirigir a otra página
        setTimeout(function () {
            // Redirigir a otra página HTML
            window.location.href = "../PantallaSoloAudio/index.html";
        }, 10000); // 10 segundos en milisegundos
    });
});
function pantallaIntermediaSoloAudio() {
    // Obtener el contenido HTML y los estilos CSS de la pantalla intermedia desde archivos externos
    Promise.all([
        fetch("../PantallaTransaccion/pantalla_animacion_equipo.html").then(response => response.text()),
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

//Para ir a la pantalla de proyectar
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón "Solo audio"
    var proyectarButton = document.getElementById("button4");

    // Agregar un event listener al botón
    proyectarButton.addEventListener("click", function () {
        // Mostrar la pantalla intermedia
        pantallaIntermediaProyectar();

        // Esperar 30 segundos antes de redirigir a otra página
        setTimeout(function () {
            // Redirigir a otra página HTML
            window.location.href = "../PantallaProyectar/index.html";
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
    var videoConferenciaButton = document.getElementById("button5");

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