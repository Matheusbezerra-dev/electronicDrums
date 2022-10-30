document.body.addEventListener('keyup', (e) => {
  playsong(e.code.toLowerCase());
});

const playsong = (song: any): void => {
  let songElement: any = document.querySelector(`#s_${song}`);
  let keyElement = document.querySelector(`div[data key="${song}"]`)
  if (songElement) {
    songElement.play()
  } 
  if (keyElement) {
    keyElement.classList.add('active');
  }
}; 