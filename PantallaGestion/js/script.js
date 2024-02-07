document.getElementById("btn_back").addEventListener("click", function() {
    // Utiliza el método history.back() para volver a la pantalla anterior
    window.close();
});


document.getElementById("btn_confirmar").addEventListener("click", function() {
    // Utiliza el método history.back() para volver a la pantalla anterior
    window.open("../PantallaTransaccion/pantalla_animacion_apagar_sistema.html", "_blank", "width=600,height=400");
    window.close();
});