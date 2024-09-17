const canvas = document.getElementById('canvas');

let health = 100;
let happiness = 100;
let discipline = 0;
let clean = 100;
let death = false;

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function update() {
    if (death) {
        document.getElementById('canvas').style.backgroundImage = "url('img/gameOver.png')";
        document.getElementById('canvas').style.transition = 'background-image 1s ease';
        document.getElementById('stats').style.display = 'none';
        document.getElementById('buttons').style.display = 'none';
        document.getElementById('retry').style.display = 'block';
    }
}
