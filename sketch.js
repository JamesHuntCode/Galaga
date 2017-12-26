var spaceship;
var lasers = [];

function setup() {
  createCanvas(600, 600);
  spaceship = new spaceship((width / 2), (height - height / 6));
}

function draw() {
  background(51);
  spaceship.show();

  for (let i = 0; i < lasers.length; i++) {
    lasers[i].update();
    lasers[i].show();

    if (lasers[i].offScreen()) {
      lasers.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    spaceship.move("left");
  } else if (keyCode === RIGHT_ARROW) {
    spaceship.move("right");
  } else if (key === ' ') {
    lasers.push(new laser(spaceship.posX, spaceship.posY));
  }
}
