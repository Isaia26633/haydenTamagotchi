let tired = false;

function sleep() {
    if (tired) {
        setTimeout(10000);
        tired = false;
        console.log(tired);
    }
}

function night() {
    document.getElementById('canvas-container').style.backgroundImage = "url('img/png/night.png')";
    document.getElementById('canvas-container').style.transition = 'background-image 1s ease';
}