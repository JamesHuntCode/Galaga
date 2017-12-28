function enemyLaser(x, y) {
  this.posX = x;
  this.posY = y;
  this.size = 8;
  this.velocity = 10;

  // Move laser down screen towards player
  this.update = function() {
    this.posY += this.velocity;
  }

  // Bool value indicating status of laser
  this.offScreen = function() {
    if (this.posY - this.size / 2 > height) {
      return true;
    }
  }

  // Draw laser
  this.show = function() {
    ellipse(this.posX, this.posY, this.size, this.size);
  }

  // Check if laser has hit the player
  this.hit = function(playerPosX, playerPosY) {

  }
}
