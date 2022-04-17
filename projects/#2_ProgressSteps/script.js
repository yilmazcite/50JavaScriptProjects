let progressElement = document.getElementById('progress');
let prevElement = document.getElementById('prev');
let nextElement = document.getElementById('next');
let stepsElement = document.querySelectorAll('.steps');

let currentValue = 1;

nextElement.addEventListener('click', () => {
  currentValue++;

  currentValue > stepsElement.length
    ? (currentValue = stepsElement.length)
    : '';

  update();
});

prevElement.addEventListener('click', () => {
  currentValue--;

  currentValue < 1 ? currentValue === 1 : '';

  update();
});

function update() {
  //Loop through stepsElement and add/remove the 'active' class by comparing the 'step' value to the 'index':
  stepsElement.forEach((step, index) => {
    index < currentValue
      ? step.classList.add('active')
      : step.classList.remove('active');
  });

  //Store the elements that have the 'active' class. The value of this variable will dynamically change as the buttons are clicked:
  let activeElements = document.querySelectorAll('.active');

  //Give the necessary style by making a calculation with the number of elements with 'active' class and the actual length of the whole steps:
  progressElement.style.width =
    ((activeElements.length - 1) / (stepsElement.length - 1)) * 100 + '%';

  //Check the currentValue and enable/disable the buttons accordingly:
  if (currentValue === 1) {
    prevElement.disabled = true;
  } else if (currentValue === stepsElement.length) {
    nextElement.disabled = true;
  } else {
    prevElement.disabled = false;
    nextElement.disabled = false;
  }
}
