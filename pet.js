const pet = {};

pet.x = 105;
pet.y = 470;
pet.width = 200;
pet.height = 200;
pet.img = new Image();
pet.img.src = 'img/sprites/hayden/haydenL.png';
pet.img.id = '1';


//direction pet is facing
//1 is left 0 is right
direction = 1;

pet.moving = true;


function draw() {
    //draws pet
    ctx.drawImage(pet.img, pet.x, pet.y, pet.width, pet.height);
    //moves the pet
    if (pet.moving) {
        if (direction == 1) {
            pet.img.src = 'img/sprites/hayden/haydenL.png';
            pet.img.id = '1';
            pet.x--;
            pet.moving = true;
        } else {
            pet.img.src = 'img/sprites/hayden/haydenR.png';
            pet.img.id = '0';
            pet.x++;
            pet.moving = true;
        }
    }
    //bounces pet back if it hits the edge of the canvas and changes direction
    if (pet.x + pet.width > canvas.width) {
        console.log('hit');
        direction = 1;
    } else if (pet.x < 0) {
        direction = 0;
    }
}