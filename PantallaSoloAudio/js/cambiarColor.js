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