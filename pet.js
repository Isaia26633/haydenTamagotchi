const pet = {};

pet.x = 105;
pet.y = 470;
pet.width = 200;
pet.height = 200;
pet.img = new Image();
pet.img.src = 'img/sprites/hayden/hayden.png';

//1 is left 0 is right
pet.direction = 1;

pet.move = false;