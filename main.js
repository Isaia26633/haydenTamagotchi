

let hunger = 100;
let health = 100;
let happiness = 100;
let discipline = 0;
let clean = 100;
let sickness = 0;
let tired = false;
let stage = 1;
let death = false;
let sickStage = 0;

function feed() {
    if (hunger = 100) {
        return full()
    } else {
        hunger += 1;
    }
}

function full() {
    sickness++;
    console.log(sickness);
    console.log(sickStage);
    if (sickness > 20 && sickStage == 0) {
        sickStage = 1;
    } else if (sickness > 40 && sickStage == 1) {
        sickStage = 2;
    } else if (sickness > 60 && sickStage == 2) {
        sickStage = 3;
    } else if (sickness > 80 && sickStage == 3) {
        sickStage = 4;
    } else if (sickness >= 100 && sickStage == 4) {
        death = true;
        console.log("ur ded lol");
    }
}


function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function update() {
    if (death) {
        document.getElementById('gameBox').style.backgroundImage = "url('img/gameOver.png')";
        document.getElementById('gameBox').style.transition = 'background-image 1s ease';
        document.getElementById('stats').style.display = 'none';
        document.getElementById('buttons').style.display = 'none';
        document.getElementById('retry').style.display = 'block';
    }
}
