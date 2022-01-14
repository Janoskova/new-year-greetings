const stars = document.querySelectorAll('.sky__star');

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

for (let i = 0; i < stars.length; i++) {
  const specificStar = stars[i];

  randomTop = getRandomNumber(0, winHeight);
  randomLeft = getRandomNumber(0, winWidth);

  const delay = Math.floor(Math.random() * 6) + 1;

  specificStar.style.top = `${randomTop}px`;
  specificStar.style.left = `${randomLeft}px`;
  specificStar.style.animationDelay = `${delay}s`;
}
