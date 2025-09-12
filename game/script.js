let player = document.getElementById('player');
let container = document.getElementById('game-container');
let infoBox = document.getElementById('info-box');

let posX = 50;
let posY = 200;
let step = 10;

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowUp') posY = Math.max(0, posY - step);
  if(e.key === 'ArrowDown') posY = Math.min(container.offsetHeight - player.offsetHeight, posY + step);
  if(e.key === 'ArrowLeft') posX = Math.max(0, posX - step);
  if(e.key === 'ArrowRight') posX = Math.min(2000, posX + step); // limite de scroll lateral

  player.style.top = posY + 'px';
  player.style.left = posX + 'px';

  container.scrollLeft = posX - 200; // scroll suave siguiendo al jugador

  checkCollision();
});

function checkCollision() {
  document.querySelectorAll('.project').forEach(proj => {
    let pRect = player.getBoundingClientRect();
    let tRect = proj.getBoundingClientRect();

    if (!(pRect.right < tRect.left || 
          pRect.left > tRect.right || 
          pRect.bottom < tRect.top || 
          pRect.top > tRect.bottom)) {
      infoBox.textContent = proj.dataset.info;
    }
  });
}
