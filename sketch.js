var spaceship;

function setup() {
  createCanvas(600, 600);
  spaceship = new spaceship((width / 2), (height - height / 6));
}

function draw() {
  background(51);
  spaceship.show();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    // Move left
  } else if (keyCode === RIGHT_ARROW) {
    // Move right
  } else if (key === ' ') {
    // Shoot
  }
}
