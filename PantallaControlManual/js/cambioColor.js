var divPlanCamaras = document.querySelectorAll('.division_control_planos .div_plan_camara');

divPlanCamaras.forEach(function(divElement) {
    divElement.addEventListener('mousedown', function() {
        cambiarEstilos(divElement, 'orange', 'white');
    });

    divElement.addEventListener('mouseup', function() {
        cambiarEstilos(divElement,'orange', 'white');
    });

    divElement.addEventListener('mouseover', function() {
        cambiarEstilos(divElement, 'orange', 'white');
    });

    divElement.addEventListener('mouseout', function() {
        cambiarEstilos(divElement, '', '');
    });
});

function cambiarEstilos(elemento, backgroundColor, color) {
    elemento.style.backgroundColor = backgroundColor;
    elemento.style.color = color;
}

document.getElementById("muteButton").addEventListener("click", function() {
    var btn = this;
    btn.classList.toggle("pulsado");
});

document.getElementById("volumeUpButton").addEventListener("click", function() {
    var btn = document.getElementById("muteButton");
    if (btn.classList.contains("pulsado")) {
        btn.classList.remove("pulsado");
    }
});

document.getElementById("volumeDownButton").addEventListener("click", function() {
    var btn = document.getElementById("muteButton");
    if (btn.classList.contains("pulsado")) {
        btn.classList.remove("pulsado");
    }
});