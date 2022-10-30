"use strict";
var _a;
const NUMBERWAIT = 250;
document.body.addEventListener('keyup', (e) => {
    playsong(e.code.toLowerCase());
});
(_a = document.querySelector('.composer button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    let song = document.querySelector('#input');
    if (song.value !== '') {
        let array = song.value.split('');
        playComposition(array);
    }
});
const playsong = (song) => {
    let songElement = document.querySelector(`#s_${song}`);
    let keyElement = document.querySelector(`div[data key="${song}"]`);
    if (songElement) {
        songElement.currentTime = 0;
        songElement.play();
    }
    if (keyElement) {
        keyElement.classList.add('active');
    }
};
const playComposition = (array) => {
    let wait = 0;
    for (let itemSong of array) {
        setTimeout(() => {
            playsong(`key${itemSong}`);
        }, wait);
        wait += NUMBERWAIT;
    }
};
