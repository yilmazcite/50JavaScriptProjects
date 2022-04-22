'use strict';

let sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  /*Create a button tag and to each button, add the 'btn' class:*/
  let btn = document.createElement('button');
  btn.classList.add('btn');

  /*Change the text of the button element with the corresponding item of the array:*/
  btn.innerText = sound;

  /*Stop playing all sounds and play the one that is clicked: */
  btn.addEventListener('click', () => {
    pauseSound();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function pauseSound() {
  sounds.forEach(sound => {
    let noSound = document.getElementById(sound);
    noSound.pause();
    noSound.currentTime = 0;
  });
}
