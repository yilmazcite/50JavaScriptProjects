'use strict';

let boxesElement = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  //Store the percentage of the window that will be used on the trigger:
  let windowPortion = 0.8;

  let triggerBottom = window.innerHeight * windowPortion;

  boxesElement.forEach(box => {
    let boxTop = box.getBoundingClientRect().top;
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

    boxTop < triggerBottom
      ? box.classList.add('show')
      : box.classList.remove('show');
  });
}
