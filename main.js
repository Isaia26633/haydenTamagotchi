const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const grave = new Image();
grave.src = 'img/png/grave.png';


let health = 100;
let happiness = 100;
let discipline = 0;
let clean = 100;
let death = false;

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pet.img, pet.x, pet.y, pet.width, pet.height);
    // if (pet.move) {
    //     if (pet.direction == 1) {
    //         pet.x--;
    //         walk();
    //     } else {
    //         pet.x++;
    //     }
    // }
    // if (pet.x > canvas.width - pet.width) {
    //     pet.direction = 0;
    // } else if (pet.x < 0) {
    //     pet.direction = 1;
    // }
}
requestAnimationFrame(gameLoop);




function healthDecrease() {
    if (health > 0) {
        health--;
    } else {
        death = true;
    }
}



function update() {
    if (death) {
        ctx.drawImage(grave, 300, 535, 90, 90);
        document.getElementById('retry').style.visibility = 'visible';
    }
}


//volume control
let volSlider = document.getElementById('volume');
let volDisplay = document.getElementById('volumeText');


volDisplay.innerHTML = 'Volume: ' + volSlider.value;

volSlider.oninput = function () {
    volDisplay.innerHTML = 'Volume: ' + this.value;
}