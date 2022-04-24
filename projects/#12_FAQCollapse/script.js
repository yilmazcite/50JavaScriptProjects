'use strict';

let toggleElements = document.querySelectorAll('.faq-toggle');

toggleElements.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
