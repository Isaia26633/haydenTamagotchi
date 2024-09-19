let sickness = 0;
let stage = 1;
let sickStage = 0;
const healSpeed = 5

function sicknessStage() {
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

//heals the thingy
function heal() {
    setTimeout(function () {
        sickness -= healSpeed;
        if (sickness < 0) {
            sickness = 0;
            console.log("healthy");
        }
        console.log('healed');
    }, 3000);
    console.log(sickness)
}