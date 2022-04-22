'use strict';

let labels = document.querySelectorAll('label');

/*Contain each letter of the labels inside a span:*/
labels.forEach(label => {
  label.innerHTML =
    label.innerText /*With forEach method, firstly reach each 'label' and then change its innerHTML by reaching and manipulating the innerText.*/
      .split(
        ''
      ) /*Split the innerText into an array. Each item (each letter) becomes an item of the array.*/
      .map(
        (letter, index) =>
          `<span style="transition-delay:${index * 50}ms;">${letter}</span>`
      ) /*Map through each item (letter) and provide them with a 'span'. */
      .join(''); /*Join the array and convert it into a string. */
}); /*Since the spans are created, styles can be applied to them now. */
