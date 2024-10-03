//walking
let walkingspritesheet = new Image();
walkingspritesheet.src = 'img/sprites/hayden/walkcycle/l/l.png'; 
const scale = 1;
let width = 200;
let height = 100;
let frame = 1;
let maxFrames = 2;
walkingspritesheet.onload = function () {
    ctx.drawImage(walkingspritesheet, pet.x, pet.y, height, width, frame * width, 0, height * scale, width * scale);
    
}


if (pet.img.id == '1') {
    walkingspritesheet.src = 'img/sprites/hayden/walkcycle/l/l.png';
} else if (pet.img.id == '0') {
    walkingspritesheet.src = 'img/sprites/hayden/walkcycle/r/r.png';
}

//eating

//sleeping

//playing

//disipline

//sick

//die