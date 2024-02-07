// GESTION DE ENLACES //

// Para ir a la pantalla de apagar
var divClickable = document.getElementById('btn_power');
divClickable.addEventListener('click', function() {
    var pantallaCerrar = window.open("../PantallaTransaccion/pantalla_animacion_apagar_sistema.html", "_blank", "width=600,height=400");
    setTimeout(function () {
        pantallaCerrar.close();
    }, 10000);
});



// Para ir a la solo audio
document.addEventListener("DOMContentLoaded", function () {
    var proyectarButton = document.getElementById("btn_proyector");
    proyectarButton.addEventListener("click", function () {
        var ventanaPantallaIntermedia = window.open("../PantallaTransaccion/pantalla_animacion_proyector.html", "_blank", "width=600,height=400");
        setTimeout(function () {
            ventanaPantallaIntermedia.close();
            window.location.href = "../PantallaSoloAudio/index.html";
        }, 10000);
    });
});



//Para ir a la pantalla de proyectar
document.addEventListener("DOMContentLoaded", function () {
    var proyectarButton = document.getElementById("btn_proyector");
    proyectarButton.addEventListener("click", function () {
        var ventanaPantallaIntermedia = window.open("../PantallaTransaccion/pantalla_animacion_proyector.html", "_blank", "width=600,height=400");
        setTimeout(function () {
            ventanaPantallaIntermedia.close();
            window.location.href = "../PantallaProyectar/index.html";
        }, 10000);
    });
});


// Para ir a la pantalla de videoconferencia
document.addEventListener("DOMContentLoaded", function () {
    var proyectarButton = document.getElementById("btn_video");
    proyectarButton.addEventListener("click", function () {
        var ventanaPantallaIntermedia = window.open("../PantallaTransaccion/pantalla_animacion_proyector.html", "_blank", "width=600,height=400");
        setTimeout(function () {
            ventanaPantallaIntermedia.close();
            window.location.href = "../PantallaVideoconferencia/index.html";
        }, 10000);
    });
});
