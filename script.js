document.addEventListener('DOMContentLoaded', function() {

  let heart = document.createElement('div')
  heart.classList.add('heart');
  heart.setAttribute('tabindex', '0'); // Make the div focusable
  

  document.body.append(heart);

  heart.innerHTML = '❤️';
  heart.style.position = 'absolute';
  heart.style.top = '200px';
  heart.style.left = '200px';
  heart.style.outline = 'none'; // Remove the default outline

  document.addEventListener('keydown', moveHeart);
  document.addEventListener('click', highlightSelected);

  function moveHeart(event) {
    switch (event.key) {
      case 'ArrowUp':
        event.target.style.top = `${event.target.offsetTop - 10}px`;
        break;
      case 'ArrowDown':
        event.target.style.top = `${event.target.offsetTop + 10}px`;
        break;
      case 'ArrowLeft':
        event.target.style.left = `${event.target.offsetLeft - 10}px`;
        break;
      case 'ArrowRight':
        event.target.style.left = `${event.target.offsetLeft + 10}px`;
        break;
    }
  }
  function highlightSelected() {
    if (document.activeElement === heart) {
      heart.style.backgroundColor = 'blue';
    } else {
      heart.style.backgroundColor = 'transparent';
    }
  }

});

