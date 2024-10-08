const walk = new Image();
walk.src = 'img/sprites/hayden/walkcycle/r/r.png';
walk.onload = loadImages;

let cols = 2;
let rows = 1;

let spriteWidth = walk.width / cols;
let spriteHeight = walk.height / rows;

let frames = 2;
let currentFrame = 0;

let srcX = pet.x;
let srcY = pet.y;

let framesDrawn = 0
// let ticks = 0;
let previousTimestamp = 0;

function animate(timestamp) {
    if (!previousTimestamp) previousTimestamp = timestamp;
    let deltaTime = (timestamp - previousTimestamp) / 100;
    previousTimestamp = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ticks += deltaTime;
    if (ticks >= 1) {
        currentFrame = ++currentFrame % frames;
        ticks = 0;
        framesDrawn++;
    }

    srcX = currentFrame * spriteWidth;

    ctx.save();
    resize();
    ctx.drawImage(walk, srcX, srcY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    ctx.restore();

    if (framesDrawn >= 2) {
        framesDrawn = 0;
        currentFrame = 0;
    }

    requestAnimationFrame(animate);
    console.log(currentFrame);
}

function resize() {
    let scale = 1;
    let midX = canvas.width / 2 - (spriteWidth * scale) / 2;
    let midY = canvas.height / 2 - (spriteHeight * scale) / 2;
    ctx.translate(midX, midY);
    ctx.scale(scale, scale);
}

let images = 2;
function loadImages() {
    images--;
    if (images == 0) {
        animate();
    }
}