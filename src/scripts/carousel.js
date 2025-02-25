// carousel.js

export default function initCarousel() {
  const btnRight = document.querySelector('.carousel__button--right');
  const btnLeft = document.querySelector('.carousel__button--left');
  const track = document.querySelector('.carousel__track');
  const slides = document.querySelectorAll('.carousel__slide');
  const indButtons = document.querySelectorAll('.carousel__indicator__button');

  const updateIndicators = function updateIndicators(index) {
    indButtons.forEach((indButton) => {
      if (parseInt(indButton.dataset.id, 10) === index) {
        indButton.textContent = '●';
      } else {
        indButton.textContent = '○';
      }
    });
  };

  const goToSlide = function goToSlide(index) {
    const firstSlideIndex = parseInt(track.firstElementChild.dataset.id, 10);
    let moves = index - firstSlideIndex;
    if (moves < 0) {
      moves = slides.length + moves; // rückwärts springen ermöglichen
    }
    for (let i = 0; i < moves; i += 1) {
      const firstSlide = track.firstElementChild;
      track.appendChild(firstSlide); // Erstes Element jeweils nach hinten schieben
    }
    updateIndicators(index);
  };

  btnRight.addEventListener('click', () => {
    const currentIndex = parseInt(track.firstElementChild.dataset.id, 10);
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  });

  btnLeft.addEventListener('click', () => {
    const currentIndex = parseInt(track.firstElementChild.dataset.id, 10);
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  });

  indButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetIndex = parseInt(button.dataset.id, 10);
      goToSlide(targetIndex);
    });
  });

  const nextSlide = function nextSlide() {
    btnRight.click();
  };
  setInterval(nextSlide, 5000);
}
