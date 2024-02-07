function changeColor(element) {
    var allRows = document.querySelectorAll('.fila_max, .fila_normal, .fila_min');
    allRows.forEach(row => {
        row.classList.remove('selected'); // Remove 'selected' class from all rows
    });
    element.classList.add('selected'); // Add 'selected' class to clicked row
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