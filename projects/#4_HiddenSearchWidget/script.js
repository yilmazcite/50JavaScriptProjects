'use strict';

let containerElement = document.querySelector('.container');
let inputElement = document.querySelector('.input');
let btnElement = document.querySelector('.btn');

btnElement.addEventListener('click', () => {
  //Add the 'active' class to the 'container' if it's not already there or remove the 'active' class from the container if it's already there:
  containerElement.classList.toggle('active');
  //'.focus()' method gives focus to the selected element:
  inputElement.focus();
});
