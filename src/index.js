// Sélection du bouton qui ouvre/ferme le menu en mobile
const menuToggle = document.querySelector(".menu-toggle");

// Sélection de la liste de navigation en mobile
const navigation = document.querySelector(".navigation-list");

// Ajoute un événement au clic sur le bouton du menu
menuToggle.addEventListener("click", () => {
    // Active/désactive l'état visuel du bouton
    menuToggle.classList.toggle("active");

    // Affiche/masque la navigation
    navigation.classList.toggle("active");
});

// Sélection de tous les boutons du silder
const buttons = document.querySelectorAll(".nav-slider-btn");

// Sélection de toutes les vidéos ou slides
const slides = document.querySelectorAll(".slider-video");

// Sélection de tous les blocs de contenu
const contents = document.querySelectorAll(".content");

// Fonction qui change le slide affiché selon l'index
const navigationSlider = function (manual) {
    // Retire la classe active de tous les boutons
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    // Retire la classe active de toutes les slides 
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    // Retire la classe active de tous les contenus
    contents.forEach((content) => {
        content.classList.remove("active");
    });

    // Active le bouton, la slide et le contenu correspondant
    buttons[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
};

// Ajoute un événement clic sur chaque bouton du slider
buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        navigationSlider(i);
    });
});
