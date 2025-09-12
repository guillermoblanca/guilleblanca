let player = document.getElementById('player');
let container = document.getElementById('game-container');
let ground = document.getElementById('ground');
let infoBox = document.getElementById('info-box');

let posX = 50;
let posY = 200;
let velX = 0;
let velY = 0;
let acc = 0.5;
let maxSpeed = 5;
let friction = 0.3;
let gravity = 0.8;
let jumpStrength = -15;
let onGround = false;
let moveLeft = false;
let moveRight = false;

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft') moveLeft = true;
  if(e.key === 'ArrowRight') moveRight = true;
  if(e.key === ' ' && onGround) { // salto
    velY = jumpStrength;
    onGround = false;
  }
});

document.addEventListener('keyup', (e) => {
  if(e.key === 'ArrowLeft') moveLeft = false;
  if(e.key === 'ArrowRight') moveRight = false;
});

function update() {
  // mover horizontalmente con aceleración
  if(moveLeft) velX -= acc;
  if(moveRight) velX += acc;

  // limitar velocidad máxima
  if(velX > maxSpeed) velX = maxSpeed;
  if(velX < -maxSpeed) velX = -maxSpeed;

  // fricción si no se pulsa ninguna tecla
  if(!moveLeft && !moveRight) {
    if(velX > 0) velX = Math.max(0, velX - friction);
    if(velX < 0) velX = Math.min(0, velX + friction);
  }

  // aplicar velocidad horizontal
  posX += velX;

  // gravedad
  velY += gravity;
  posY += velY;

  // colisión con suelo
  let groundY = container.offsetHeight - ground.offsetHeight - player.offsetHeight;
  if(posY > groundY) {
    posY = groundY;
    velY = 0;
    onGround = true;
  }

  // límites laterales
  if(posX < 0) posX = 0;
  if(posX > 2000) posX = 2000;

  // aplicar posiciones
  player.style.top = posY + 'px';
  player.style.left = posX + 'px';

  // scroll lateral
  container.scrollLeft = posX - 200;

  checkCollision();
  requestAnimationFrame(update);
}

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

update(); // iniciar loop
