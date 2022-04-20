'use strict';

let percentageElement = document.querySelector('.percentage');
let bgElement = document.querySelector('.background');

let increment = 0;

//Call the function in every 30 milliseconds:
let int = setInterval(blurring, 30);

//The opacity of the percentage text will change as the number goes up. The opacity will be 1 at the starting point, which means that it will not be opaque, and it will slowly decrease to 0 which means that the number will become gradually opaque. For this, an arrow function taken from stackoverflow will be used:
let scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}; //In this function, 'num' parameter will be referred to the 'increment'. 'The next two pairs of parameters are going to be used to define when mapping starts and ends, so '0' and '100' will be used as inputs of the first two parameters. The last two parameters are for the opacity scaling: the first parameter, 'out_min' will be '1' and 'out_max' will be '0' because the opacity will be applied later.

//Scale function will also be used to make a shift on the blur of the image.

function blurring() {
  increment++;

  //Stop and clear the interval at 100 and clear it:
  increment > 99 ? clearInterval(int) : '';

  //Update the percentage text dynamically as it changes:
  percentageElement.innerText = `${increment}%`;
  //As the 'increment' goes from 0 to 100, the opacity level will go from 1 to 0 accordingly:
  percentageElement.style.opacity = scale(increment, 0, 100, 1, 0);
  //As the 'increment' goes from 0 to 100, the blur scale of the image will decrease from 30 to 0 accordingly:
  bgElement.style.filter = `blur(${scale(increment, 0, 100, 30, 0)}px)`;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
