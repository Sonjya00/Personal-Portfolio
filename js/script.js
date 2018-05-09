window.onload = function () {

var menu = document.querySelector('#menu');
var body = document.querySelector('body');
var drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
/*if click anywhere on the screen, the menu closes*/
body.addEventListener('click', function() {
  drawer.classList.remove('open');
});
}
