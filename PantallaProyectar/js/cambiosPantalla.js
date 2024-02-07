//boton de vuelta atras
var divClickable = document.getElementById('btn_back');
divClickable.addEventListener('click', function() {
    window.location.href = '../PantallaMenu/index.html';
});
// GESTION DE ENLACES //

// Para ir a la pantalla de apagar
var divClickable = document.getElementById('btn_power');
divClickable.addEventListener('click', function() {
    var pantallaCerrar = window.open("../PantallaTransaccion/pantalla_animacion_apagar_sistema.html", "_blank", "width=600,height=400");
    setTimeout(function () {
        pantallaCerrar.close();
    }, 10000);
});

// Para ir a la pantalla de solo audio
document.addEventListener("DOMContentLoaded", function () {
    var proyectarButton = document.getElementById("btn_audio");
    proyectarButton.addEventListener("click", function () {
        var ventanaPantallaIntermedia = window.open("../PantallaTransaccion/pantalla_animacion_proyector.html", "_blank", "width=600,height=400");
        setTimeout(function () {
            ventanaPantallaIntermedia.close();
            window.location.href = "../PantallaSoloAudio/index.html";
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



// Para ir a la pantalla de encender proyector
var divClickable = document.getElementById('btn_encd_proyector');
divClickable.addEventListener('click', function() {
    window.open("../PantallaGestion/pantalla_animacion_apagar_proyector.html", "_blank", "width=600,height=400");
});

// Para ir a la pantalla de seleccionar fuente
var divClickable = document.getElementById('btn_fuente');
divClickable.addEventListener('click', function() {
    window.open("../PantallaFuente/index.html", "_blank", "width=600,height=400");

});


// Para ir a la pantalla de configuracion audio
var divClickable = document.getElementById('confAudio-button');
divClickable.addEventListener('click', function() {
    window.location.href = '../PantallaControlAudio/index.html';
});

