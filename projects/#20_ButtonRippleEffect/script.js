'use strict';

let buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (event) {
    let x = event.clientX;
    let y = event.clientY;
    //Console log x and y to see their values. They simply return the location of the screen that is clicked, on x and y axis.

    let buttonTop = event.target.offsetTop;
    let buttonLeft = event.target.offsetLeft;
    //Get the position of the button from top and left.

    let xInsideBtn = x - buttonLeft;
    let yInsideBtn = y - buttonTop;
    //Decrement the clicked location inside the button from the position of the button and get the remainder.

    let circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInsideBtn + 'px';
    circle.style.left = xInsideBtn + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
