// Récupération de l'élément avec l'id "darkmode"
let darkmode = document.querySelector('#darkmode');

// Gestionnaire d'événement au clic sur l'élément "darkmode"
darkmode.onclick = () => {
    // Vérification de la présence de la classe CSS "bx-moon" sur l'élément "darkmode"
    if (darkmode.classList.contains('bx-moon')) {
        // Remplacement de la classe CSS "bx-moon" par "bx-sun" sur l'élément "darkmode"
        darkmode.classList.replace('bx-moon', 'bx-sun');
        // Ajout de la classe CSS "color" au corps du document
        document.body.classList.add('color');
    } else {
        // Remplacement de la classe CSS "bx-sun" par "bx-moon" sur l'élément "darkmode"
        darkmode.classList.replace('bx-sun', 'bx-moon');
        // Suppression de la classe CSS "color" du corps du document
        document.body.classList.remove('color');
    }
};

// Récupération de l'élément avec l'id "menu-icon"
let menu = document.querySelector('#menu-icon');
// Récupération de l'élément avec la classe "navlist"
let navlist = document.querySelector('.navlist');

// Gestionnaire d'événement au clic sur l'élément "menu"
menu.onclick = () => {
    // Inversion de la classe CSS "bx-x" sur l'élément "menu"
    menu.classList.toggle('bx-x');
    // Inversion de la classe CSS "open" sur l'élément "navlist"
    navlist.classList.toggle('open');
};

// Gestionnaire d'événement au défilement de la fenêtre
window.onscroll = () => {
    // Suppression de la classe CSS "bx-x" sur l'élément "menu"
    menu.classList.remove('bx-x');
    // Suppression de la classe CSS "open" sur l'élément "navlist"
    navlist.classList.remove('open');
};

// Configuration de l'objet ScrollReveal
const sr = ScrollReveal({
    distance: '70px', // Distance de l'animation
    duration: 2700, // Durée de l'animation
    reset: true // Réinitialisation de l'animation à chaque fois qu'elle est déclenchée
});

// Animation des éléments avec la classe "hero-text"
sr.reveal('.hero-text', { delay: 200, origin: 'bottom' });

// Animation des éléments avec la classe "hero-img"
sr.reveal('.hero-img', { delay: 350, origin: 'top' });

// Animation des éléments avec la classe "down-arrow"
sr.reveal('.down-arrow', { delay: 450, origin: 'right' });
