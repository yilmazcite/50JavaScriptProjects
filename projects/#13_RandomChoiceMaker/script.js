'use strict';

let tagsElement = document.getElementById('tags');
let textAreaElement = document.getElementById('textarea');

//When the page loads, the focus is on the textarea and the cursor is flashing:
textAreaElement.focus();

textAreaElement.addEventListener('keyup', event => {
  createTags(event.target.value);

  if (event.key === 'Enter') {
    setTimeout(() => {
      event.target.value = '';
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  let tags = input
    .split(',') //Split the input by each comma and create a node list which is similar to an array.
    .filter(tag => tag.trim() !== '') //Filter the input and exclude the whitespaces by trimming them according to the conditional.
    .map(tag => tag.trim()); //Map through the items and trim once again.

  //Clear the element:
  tagsElement.innerHTML = '';

  tags.forEach(tag => {
    //From the 'tags' array, create a 'span' for each element.
    let tagElement = document.createElement('span');
    //Add the proper class list to each element:
    tagElement.classList.add('choice-tag');
    //Change the text of the span with whatever is the item array:
    tagElement.innerText = tag;
    //Add the newly created spans into the '#tag' div:
    tagsElement.appendChild(tagElement);
  });
}

function randomSelect() {
  let times = 30; //This is the time that will be used after when highlighting each random span stops.

  let interval = setInterval(() => {
    let randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      let randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  let tags = document.querySelectorAll('.choice-tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('tag-selector');
}

function unhighlightTag(tag) {
  tag.classList.remove('tag-selector');
}
