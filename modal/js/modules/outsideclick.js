export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside'
  if (!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      html.addEventListener(userEvent, HandleOutsideClick)
    })
    html.addEventListener('click', HandleOutsideClick);
    element.setAttribute(outside, '')
  }
  function HandleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside)
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, HandleOutsideClick)
      })
      html.removeEventListener('click', HandleOutsideClick);

      callback();

    }
  }
}