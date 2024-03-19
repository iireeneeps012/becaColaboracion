let isDragging = false;

function updateProgressBar(percent) {
    const progressFill = document.getElementById('progressFill');
    progressFill.style.height = percent + '%';
}

function startDragging(event) {
    isDragging = true;
    document.addEventListener('mousemove', handleDragging);
    document.addEventListener('mouseup', stopDragging);
    handleDragging(event);
}

function handleDragging(event) {
    if (isDragging) {
        const progressBar = document.getElementById('verticalProgressBar');
        const rect = progressBar.getBoundingClientRect();
        let percent = ((rect.bottom - event.clientY) / rect.height) * 100;
        percent = Math.min(100, Math.max(0, percent)); // Asegura que el valor esté entre 0 y 100
        updateProgressBar(percent);
    }
}

function stopDragging() {
    isDragging = false;
    document.removeEventListener('mousemove', handleDragging);
    document.removeEventListener('mouseup', stopDragging);
}

function adjustVolume(volumeChange) {
    const progressFill = document.getElementById('progressFill');
    let currentHeight = parseFloat(progressFill.style.height);

    if (isNaN(currentHeight)) {
        currentHeight = 0;
    }

    // Ajusta el volumen según el cambio especificado
    currentHeight += volumeChange;

    // Asegura que el volumen esté entre 0 y 100
    currentHeight = Math.min(100, Math.max(0, currentHeight));

    updateProgressBar(currentHeight);
}

var divPlanCamaras = document.querySelectorAll('.volume-buttons');

divPlanCamaras.forEach(function (divElement) {
    divElement.addEventListener('click', function () {
        cambiarEstilos(divElement, 'red', 'white');
    });

    divElement.addEventListener('click', function () {
        cambiarEstilos(divElement, '', '');
    });

    divElement.addEventListener('click', function () {
        cambiarEstilos(divElement, 'orange', 'white');
    });

    divElement.addEventListener('click', function () {
        cambiarEstilos(divElement, '', '');
    });
});

var muteButton = document.getElementById('muteButton');
var isMuted = false;

muteButton.addEventListener('click', function () {
    isMuted = !isMuted; // Toggle the state
    if (isMuted) {
        changeButtonColor(muteButton, 'orange', 'white');
    } else {
        restoreButtonColor(muteButton);
    }
});

function changeButtonColor(button, backgroundColor, color) {
    cambiarEstilos(button, backgroundColor, color);
}

// Function to restore the original styles of the volume buttons when releasing the click
function restoreButtonColor(button) {
    cambiarEstilos(button, '', '');
}

function cambiarEstilos(elemento, backgroundColor, color) {
    elemento.style.backgroundColor = backgroundColor;
    elemento.style.color = color;
}
