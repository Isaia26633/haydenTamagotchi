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
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 30,20);
}



requestAnimationFrame(gameLoop);

function healthDecrease() {
    if (health > 0){
        health --;
    } else {
        death = true;
    }
}

function update() {
    if (death) {
        document.getElementById('canvas-container').style.backgroundImage = "url('img/png/gameOver.png')";
        document.getElementById('canvas-container').style.transition = 'background-image 1s ease';
        document.getElementById('retry').style.display = 'block';
    }


}


//volume control
let volSlider = document.getElementById('volume');
let volDisplay = document.getElementById('volumeText');


volDisplay.innerHTML = 'Volume: ' + volSlider.value;

volSlider.oninput = function () {
    volDisplay.innerHTML = 'Volume: ' + this.value;
}