const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
let index = 0;

document.querySelector('.left').onclick = () => {
  if (index > 0) index--;
  carousel.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector('.right').onclick = () => {
  if (index < cards.length - 1) index++;
  carousel.style.transform = `translateX(-${index * 100}%)`;
};
