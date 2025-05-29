document.addEventListener('DOMContentLoaded', () => {
    // NAVIGATION TOGGLE
    const class1 = document.querySelector('.class1');
    const nav = document.querySelector('nav');

    if (class1 && nav) {
        class1.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // EFFET DE TEXTE TYPING
    const typingElement = document.getElementById('typing');
    const words = ["Développeuse web"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = words[wordIndex];
    let currentLetters = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            currentLetters = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentLetters = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typingElement.innerHTML = currentLetters;

        let typeSpeed = 200;
        if (isDeleting) typeSpeed /= 2;

        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            currentWord = words[wordIndex];
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (typingElement) {
        type();
    }

    // CARROUSEL
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-track .interet');
    const prevBtn = document.querySelector('.carousel-btn.left');
    const nextBtn = document.querySelector('.carousel-btn.right');

    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', showNextSlide);
        prevBtn.addEventListener('click', showPrevSlide);
    }

    // Rotation automatique
    setInterval(showNextSlide, 4000);
});

function filterProjects(category) {
    const projets = document.querySelectorAll('.projet');
    projets.forEach(projet => {
        if (category === '') {
            // Filtre "Aperçu" : n'affiche que les projets avec la classe "important"
            projet.style.display = projet.classList.contains('important') ? 'flex' : 'none';
        } else if (category === 'all') {
            projet.style.display = 'flex';
        } else {
            projet.style.display = projet.classList.contains(category) ? 'flex' : 'none';
        }
    });
}


