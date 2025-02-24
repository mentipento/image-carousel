// index.js

import './styles.css';


const btnRight = document.querySelector('.carousel__button--right'); // Rechts-Klick-Button
const btnLeft = document.querySelector('.carousel__button--left');
const track = document.querySelector('.carousel__track'); // UL-Element, das alle Bilder enthält
const slides = document.querySelectorAll('.carousel__slide'); // Alle Bilder

btnRight.addEventListener('click', () => {
    const firstSlide = track.firstElementChild; // Das erste Bild im Track
    track.appendChild(firstSlide); // Bild ans Ende der Liste verschieben
});

btnLeft.addEventListener('click', () => {
    const lastSlide = track.lastElementChild;
    track.prepend(lastSlide);
})