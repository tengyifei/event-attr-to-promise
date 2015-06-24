# event-attr-to-promise
HTML Event attribute to promise. JSPM-ready.

Usage:
```js
import eventToPromise from 'event-attr-to-promise';

function loadImage (url) {
  let img = new Image();
  img.url = url;
  // img.onload resolves the promise with event
  // img.onerror rejects the promise with event
  return eventToPromise(img, 'load')
  .then(event => ...)
  .catch(event => ...);
}
```
