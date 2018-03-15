var buttons = document.getElementsByTagName('button');

// Creating a for each loop into an array that can be called within the function b
Array.prototype.forEach.call(buttons, function (b) {
  b.addEventListener('click', createRipple);
});

function createRipple (e) {
  // creates a class element called ripple and appends each child of ripple into
  // a div
  var circle = document.createElement('div');
  this.appendChild(circle);

  // set the width and height of the circle
  var d = Math.max(this.clientWidth, this.clientHeight);

  // use css styling to set width and height to pixel size
  circle.style.width = circle.style.height = d + 'px';

  // position the circle
  // first sets the offset
  // the second halves the dimension variable of max
  // clientX is the coordinate of the mouse click
  circle.style.left  = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

  circle.classList.add('ripple');

}
