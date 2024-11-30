
function toggleInfo(index) {
    const row = document.getElementById(`row-${index}`);
    const infoRow = document.getElementById(`info-${index}`);

    // Alternar clase active en la fila
    row.classList.toggle('active');

    // Alternar la visibilidad de la fila de información
    if (row.classList.contains('active')) {
        infoRow.style.display = 'table-row'; // Mostrar la fila
    } else {
        infoRow.style.display = 'none'; // Ocultar la fila
    }
}
