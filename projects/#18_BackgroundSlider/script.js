'use strict';

let bodyElement = document.body;
let slidesElement = document.querySelectorAll('.slide');
let leftBtnEl = document.getElementById('left');
let rightBtnEl = document.getElementById('right');

let activeSlide = 0;

rightBtnEl.addEventListener('click', () => {
  activeSlide++;

  activeSlide > slidesElement.length ? (activeSlide = 0) : '';

  setBgToBody();
  setActiveSlide();
});

leftBtnEl.addEventListener('click', () => {
  activeSlide--;

  activeSlide < 0 ? (activeSlide = slidesElement.length - 1) : '';

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  bodyElement.style.backgroundImage =
    slidesElement[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slidesElement.forEach(slide => {
    slide.classList.remove('active');
  });
  slidesElement[activeSlide].classList.add('active');
}
