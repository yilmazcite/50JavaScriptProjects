'use strict';

let toggleElement = document.querySelector('.toggle');
let hourElement = document.querySelector('.hour');
let minuteElement = document.querySelector('.minute');
let secondElement = document.querySelector('.second');
let timeElement = document.querySelector('.time');
let dateElement = document.querySelector('.date');

let days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggleElement.addEventListener('click', event => {
  let html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    event.target.innerText = 'Dark mode';
  } else {
    html.classList.add('dark');
    event.target.innerText = 'Light mode';
  }
});

function setTime() {
  let time = new Date();
  //console.log(time); //To see what 'new Date()' method returns.

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let day = time.getDay();
  let month = time.getMonth();
  let date = time.getDate(); //Gets the day of the month.

  let ampm = hours >= 12 ? 'PM' : 'AM';

  let hoursForClock = hours % 12; //To set a 12-hour clock instead of a 24-hour one.

  //A 'scale' function will be used to rotate the hands of the clocks according to the current hour. The same function was also used in project #5.
  hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`; //Basically the function is used to co-ordinate the 12-hour base clock with 360 degrees. As the hour goes from '0' to 11' (because it's a 12-hour clock), the degree will shift from '0' to '360' accordingly.

  //The same function is applied to the minute and second handles on a '0 to 59' basis this time:
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  //Setting the time and adding an extra '0' to the front of the minute if it is less than 10:
  timeElement.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  //Setting the date:
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}`;
}

setTime();

//To make the 'second' handle move every second:
setInterval(setTime, 1000);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
