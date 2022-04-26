'use strict';

let counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  let updateCounter = () => {
    let target = Number(counter.getAttribute('data-target'));
    let count = Number(counter.innerText);
    /*Since all the values that are received from 'data-target' are divided by the same amount ,250, this will enable each of the counters finish loading together regardless of the number of 'data-target'. */
    let increment = target / 250;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      //Wait 1 millisecond before running updateCounter:
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
