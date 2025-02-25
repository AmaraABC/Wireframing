// Nouveau : Fichier JavaScript pour le bon fonctionnement du menu hamburger
const burger = document.querySelector('.day-one-burger');
const menu = document.querySelector('.day-one-nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});