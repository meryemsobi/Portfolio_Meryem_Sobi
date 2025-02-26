// Exemple d'ajout d'une fonctionnalité simple, comme un scroll suave au clic sur les liens du menu

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Alerte avant le téléchargement du fichier Marionnet
function alertMarionnet() {
    alert("Ce fichier vient d’être téléchargé.\nIl ne peut fonctionner correctement que sur Marionnet.");
}