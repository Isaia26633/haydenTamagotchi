let tired = false;
let nighttime = false;


function sleep() {
    if (tired) {
        setTimeout(10000);
        tired = false;
        console.log('energized');
    }
}

function night() {
    if (!nighttime) {
        document.getElementById('canvas-container').style.backgroundImage = "url('img/png/night.png')";
        document.getElementById('canvas-container').style.transition = 'background-image 1s ease';
        nighttime = true;
        
    } else {
        document.getElementById('canvas-container').style.backgroundImage = "url('img/png/day.png')";
        document.getElementById('canvas-container').style.transition = 'background-image 1s ease';
        nighttime = false;
    }
    //sets a cooldown for the night button
    document.getElementById('light').disabled = true;
    setTimeout(() => {
        document.getElementById('light').disabled = false;
        console.log('night button is ready');
    }, 10000);
}