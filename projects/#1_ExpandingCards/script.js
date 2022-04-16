'use strict';

let panels = document.querySelectorAll('.panel');

//Create a function to remove the 'active' class from all the 'panels':
let removeActiveClass = function () {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
};

//Adding and removing the 'active' function with an eventListener:
panels.forEach(panel => {
  panel.addEventListener('click', function () {
    //Call the function and remove 'active' class from all the elements:
    removeActiveClass();
    //Add the 'active' class to the one that is clicked:
    panel.classList.add('active');
  });
});
