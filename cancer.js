let sickness = 0;
let stage = 1;
let sickStage = 0;

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