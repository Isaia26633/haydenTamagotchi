//walking

const walkSheet = new Image();
walkSheet.src = 'img/sprites/hayden/walkcycle/l/l.png';

let col = 1
let row = 2

let spriteWidth = pet.width / col;
let spriteHeight = pet.height / row;

totalFrame = 1;
currentFrame = 0;

let srcX = 0;
let srcY = 0;

let FPS = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);

    currentFrame = (currentFrame + 1) % totalFrame;

    srcX = currentFrame * spriteWidth;

    ctx.drawImage(walkSheet, srcX, srcY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    FPS++;

    if(FPS >= 10){
        currentFrame ++
        FPS = 0;
    }
    console.log(currentFrame);
    console.log(FPS);
}

//eating
