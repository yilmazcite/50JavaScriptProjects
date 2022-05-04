'use strict';

let fillElement = document.querySelector('.fill');
let emptyElements = document.querySelectorAll('.empty');

//For more information about 'drag events', visit https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event

fillElement.addEventListener('dragstart', dragStart);
fillElement.addEventListener('dragend', dragEnd);

for (let empty of emptyElements) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className += 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fillElement);
}
