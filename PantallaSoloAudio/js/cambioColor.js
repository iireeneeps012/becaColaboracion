document.getElementById("btn_congelar").addEventListener("click", function() {
    var btn = this;
    btn.classList.toggle("pulsado");
    if (btn.classList.contains("pulsado")) {
        btn.querySelector("span").textContent = "Congelado";
    } else {
        btn.querySelector("span").textContent = "Congelar";
    }
});

//

var btnProyectar = document.getElementById("btn_proyectar");
var spanProyectar = btnProyectar.querySelector("span");

btnProyectar.addEventListener("mouseenter", function() {
    spanProyectar.textContent = "Apagar Proyector";
});

btnProyectar.addEventListener("mouseleave", function() {
    spanProyectar.textContent = "Encender Proyector";
});

btnProyectar.addEventListener("click", function() {
    var btn = this;
    btn.classList.toggle("encendido");
    if (btn.classList.contains("encendido")) {
        spanProyectar.textContent = "Apagar Proyector";
    } else {
        spanProyectar.textContent = "Encender Proyector";
    }
});


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