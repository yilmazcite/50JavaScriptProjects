'use strict';
let openBtnElement = document.getElementById('open');
let closeBtnElement = document.getElementById('close');
let containerElement = document.querySelector('.container');

openBtnElement.addEventListener('click', () =>
  containerElement.classList.add('show-nav')
);

closeBtnElement.addEventListener('click', () =>
  containerElement.classList.remove('show-nav')
);
