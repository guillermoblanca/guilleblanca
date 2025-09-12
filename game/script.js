

let container = document.getElementById('game-container');
let ground = document.getElementById('ground');
let infoBox = document.getElementById('info-box');

//Player data
let scale = 3;
let player = document.getElementById('player');
player.style.width = 19 * scale + 'px';
player.style.height = 34 * scale + 'px';

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
let currentAnimation = 'idle';


// Para que el movimiento sea relativo al ancho de la pantalla
let screenWidth = container.offsetWidth;

function updateParallax() {
    let scrollX = posX; // posición del jugador

    document.getElementById('layer1').style.backgroundPositionX = -scrollX * 0.2 + 'px';
    document.getElementById('layer2').style.backgroundPositionX = -scrollX * 0.5 + 'px';
    document.getElementById('layer3').style.backgroundPositionX = -scrollX * 0.8 + 'px';
}



document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveLeft = true;
    if (e.key === 'ArrowRight') moveRight = true;
    if (e.key === ' ' && onGround) { // salto
        velY = jumpStrength;
        onGround = false;
    }
});

window.addEventListener('resize', () => {
    document.getElementById('parallax').style.width = window.innerWidth + 'px';
    document.getElementById('parallax').style.height = window.innerHeight + 'px';
});


document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') moveLeft = false;
    if (e.key === 'ArrowRight') moveRight = false;
});

// Límites del mundo
let worldWidth = 2000; // ancho total del nivel

function update() {
    // mover horizontalmente
    if (moveLeft) velX -= acc;
    if (moveRight) velX += acc;

    // velocidad máxima
    velX = Math.max(-maxSpeed, Math.min(maxSpeed, velX));

    // fricción
    if (!moveLeft && !moveRight) velX *= 0.8;

    // aplicar velocidad
    posX += velX;
    posY += velY;

    // gravedad
    velY += gravity;

    // colisión con suelo
    let groundY = container.offsetHeight - ground.offsetHeight - player.offsetHeight;
    if (posY > groundY) {
        posY = groundY;
        velY = 0;
        onGround = true;
    }

    // limitar movimiento horizontal al mundo
    posX = Math.max(0, Math.min(posX, worldWidth - player.offsetWidth));

    // aplicar posiciones
    player.style.left = posX + 'px';
    player.style.top = posY + 'px';

    // actualizar parallax sin mover el contenedor
    updateParallax();

    // animaciones y colisiones
    updateAnimation();
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

function updateAnimation() {
    let newAnimation = 'idle';

    if (!onGround) {
        newAnimation = 'jump';
    } else if (Math.abs(velX) > 0.1) {
        newAnimation = 'run';
    }

    if (newAnimation !== currentAnimation) {
        setAnimation(newAnimation);
        currentAnimation = newAnimation;
    }

    if (newAnimation !== currentAnimation) {
        setAnimation(newAnimation);
        currentAnimation = newAnimation;
    }

    // reorientar según dirección
    if (velX > 0) {
        player.style.transform = 'scaleX(1)'; // mirando derecha
    } else if (velX < 0) {
        player.style.transform = 'scaleX(-1)'; // mirando izquierda
    }
}

function setAnimation(animation) {
    let player = document.getElementById('player');

    switch (animation) {
        case 'idle':
            player.src = 'assets/Character/sprites/idle.gif';
            break;
        case 'run':
            player.src = 'assets/Character/sprites/run.gif';
            break;
        case 'jump':
            player.src = 'assets/Character/sprites/jump.png';
            break;
    }
}


update(); // iniciar loop
