const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let health = 100;
let happiness = 100;
let discipline = 0;
let clean = 100;
let death = false;

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

requestAnimationFrame(gameLoop);

function update() {
    if (death) {
        document.getElementById('canvas-container').style.backgroundImage = "url('img/png/gameOver.png')";
        document.getElementById('canvas-container').style.transition = 'background-image 1s ease';
        document.getElementById('retry').style.display = 'block';
    }
}
