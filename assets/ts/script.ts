const NUMBERWAIT = 250;

document.body.addEventListener('keyup', (e) => {
  playsong(e.code.toLowerCase());
});

document.querySelector('.composer button')?.addEventListener('click', () => {
  let song: any = document.querySelector('#input');

  if (song.value !== '') {
    let array = song.value.split('');
    playComposition(array)
  }

});

const playsong = (song: any): void => {
  let songElement: any = document.querySelector(`#s_${song}`);
  let keyElement: any = document.querySelector(`div[data key="${song}"]`)
  if (songElement) {
    songElement.currentTime = 0;
    songElement.play()
  } 
  if (keyElement) {
    keyElement.classList.add('active');
  }
}; 

const playComposition = (array: string[]): void => {
  let wait = 0;
  for(let itemSong of array) {
    setTimeout(() => {
      playsong(`key${itemSong}`)
    },wait);
    wait += NUMBERWAIT;
  }
}