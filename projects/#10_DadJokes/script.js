'use strict';

let jokeElement = document.getElementById('joke');
let jokeBtnElement = document.getElementById('jokeBtn');

jokeBtnElement.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  let config = {
    headers: {
      Accept: 'application/json',
    },
  };
  fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => {
      jokeElement.innerHTML = data.joke;
    });
}
