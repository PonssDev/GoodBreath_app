let start = document.getElementById('start');

start.addEventListener('click', function() {
  let bordeCirculo = document.querySelector('.borde-circulo');
  
  if (start.innerHTML === 'Stop') {
    bordeCirculo.classList.remove('start-animation');
    start.innerHTML = 'Tap to start';
  } else {
    bordeCirculo.classList.add('start-animation');
    start.innerHTML = 'Stop';
  }
});
