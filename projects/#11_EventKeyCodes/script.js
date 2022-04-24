'use strict';

let container = document.getElementById('container');

window.addEventListener('keydown', eventObject => {
  container.innerHTML = `<div class="key">
 ${eventObject === ' ' ? 'Space' : eventObject.key}
 <small>event.key</small>
</div>
<div class="key">
 ${eventObject.keyCode}
 <small>event.keyCode</small>
</div>
<div class="key">
 ${eventObject.code}
 <small>event.code</small>
</div>`;
});

// How to check the keyboard event and reach the keycode belonging to a key in keyboard:
window.addEventListener('keydown', eventObject => {
  console.log(eventObject);
});
