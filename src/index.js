// index.js

import './styles.css';

const btnRight = document.querySelector('.carousel__button--right'); // Rechts-Klick-Button
const btnLeft = document.querySelector('.carousel__button--left');
const track = document.querySelector('.carousel__track'); // UL-Element, das alle Bilder enthält

btnRight.addEventListener('click', () => {
  const firstSlide = track.firstElementChild;
  const slides = document.querySelectorAll('.carousel__slide');
  const index = (parseInt(firstSlide.dataset.id, 10) + 1) % slides.length;
  const indButton = document.querySelector(`.carousel__indicator__button[data-id='${index}']`);
  indButton.click();
});

btnLeft.addEventListener('click', () => {
  const firstSlide = track.firstElementChild;
  const slides = document.querySelectorAll('.carousel__slide');
  const index = (parseInt(firstSlide.dataset.id, 10) - 1 + slides.length) % slides.length;
  const indButton = document.querySelector(`.carousel__indicator__button[data-id='${index}']`);
  indButton.click();
});

const indButtons = document.querySelectorAll('.carousel__indicator__button');
indButtons.forEach((button) => {
  const buttonElement = button;
  button.addEventListener('click', () => {
    indButtons.forEach((btn) => {
      const clickedButton = btn;
      clickedButton.textContent = '○';
    });
    buttonElement.textContent = '●';

    const targetIndex = parseInt(button.dataset.id, 10);
    const firstSlideIndex = parseInt(track.firstElementChild.dataset.id, 10);

    let moves = targetIndex - firstSlideIndex;

    if (moves < 0) {
      const slides = document.querySelectorAll('.carousel__slide');
      moves = slides.length + moves; // rückwärts springen ermöglichen
    }

    for (let i = 0; i < moves; i += 1) {
      const firstSlide = track.firstElementChild;
      track.appendChild(firstSlide); // Erstes Element jeweils nach hinten schieben
    }
  });
});
