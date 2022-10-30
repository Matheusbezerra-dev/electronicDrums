"use strict";
document.body.addEventListener('keyup', (e) => {
  playsong(e.code.toLowerCase());
});
const playsong = (song) => {
  let songElement = document.querySelector(`#s_${song}`);
  let keyElement = document.querySelector(`div[data-key="${song}"]`);
  if (songElement) {
    songElement.play();
  }
  if (keyElement) {
    keyElement.classList.add('active');
    setTimeout(() => {
      keyElement.classList.remove('active')
    }, 200)
  }
};
