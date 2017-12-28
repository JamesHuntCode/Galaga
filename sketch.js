var spaceship;
var stars = [];
var enemySpacehips = [];
var lasers = [];
var enemyLasers = [];

function setup() {
  createCanvas(600, 600);
  spaceship = new spaceship((width / 2), (height - height / 6));

  // Setup starfield
  for (let i = 0; i < 100; i++) {
    stars[i] = new star(Math.floor(Math.random()*width), (0 - Math.floor(Math.random()*height)));
  }

  // Setup alien attackers
  enemySpacehips.push(new enemy(width/2, height/2));
}

function draw() {
  background(51);
  noStroke();

  // Draw moving stars
  for (let i = 0; i < stars.length; i++) {
    fill('rgba(255, 255, 255, 0.5)');
    stars[i].update();
    stars[i].show();
    stars[i].bounds();
  }

  // Draw player icon
  stroke('blue')
  fill('white');
  spaceship.show();
  noStroke();

  // Draw lasers from player
  for (let i = 0; i < lasers.length; i++) {
    stroke('blue');
    fill('white');
    lasers[i].update();
    lasers[i].show();
    noStroke();

    if (lasers[i].offScreen()) {
      lasers.splice(i, 1);
    }
  }

  // Draw enemy attackers
  for (let i = 0; i < enemySpacehips.length; i++) {
    stroke('red')
    fill('white');
    enemySpacehips[i].update();
    enemySpacehips[i].show();
    noStroke();
  }

  // Draw enemy laser rays
  for (let i = 0; i < enemyLasers.length; i++) {
    enemyLasers[i].update();
    enemyLaser[i].show();
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
