const carousel = document.querySelector('.carousel');
let currentSlide = 0;
const slides = carousel.querySelectorAll('img');
const captions = [
    { title: 'PELLENC ST - 136m²', description: 'POLLUTEC - Lyon Eurexpo' },
    { title: 'LMA - 72m²', description: 'EXPO PROTECTION - Paris' },
    { title: 'KOKIRIKI - 52m²', description: 'SIAL - Paris' },
    { title: 'SFE - 107m²', description: 'SIRHA - Lyon Eurexpo' },
    { title: 'JEEPER - 36m²', description: 'SIRHA - Lyon' },
    { title: 'U-POWER - 36m²', description: 'PREVENTICA - Toulouse' },
    // Ajoutez d'autres légendes ici
];

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
        slide.style.opacity = index === slideIndex ? 1 : 0;
    });
    updateCaption(slideIndex);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
//    slides[currentSlide].classList.add('appear-in-out');
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function updateCaption(slideIndex) {
    const legende = document.querySelector('.legende');
    legende.innerHTML = `
        <h3>${captions[slideIndex].title}</h3>
        <p>${captions[slideIndex].description}</p>
    `;
}

// Afficher la première image au chargement de la page
showSlide(currentSlide);

// Défilement automatique toutes les 3 secondes
setInterval(nextSlide, 10000);