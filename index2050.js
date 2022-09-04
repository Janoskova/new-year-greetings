'use strict';

const text =
  'Ať ti nadcházející rok přinese nová vzrušující dobrodružství doplněná o zážitky měnící život k lepšímu!';
const speed = 45;
let i = 0;

const type = () => {
  if (i < text.length) {
    document.querySelector('.city__text').textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
};

type();
