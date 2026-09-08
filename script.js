// Scroll del Carrusel
function scrollCarousel(direction) {
    const track = document.getElementById('certCarousel');
    const scrollAmount = 270;
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Funciones para abrir y cerrar el Modal
function openModal(imgSrc, title, desc) {
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('certModal').style.display = 'flex';
}

function closeModalDirect() {
    document.getElementById('certModal').style.display = 'none';
}

function closeModal(event) {
    if (event.target.id === 'certModal') {
        closeModalDirect();
    }
}