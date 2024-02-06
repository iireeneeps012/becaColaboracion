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

