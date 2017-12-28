function enemyLaser(x, y) {
  this.posX = x;
  this.posY = y;
  this.size = 8;
  this.velocity = 10;

  this.update = function() {
    this.posY += this.velocity;
  }

  this.offScreen = function() {
    if (this.posY - this.size / 2 > height) {
      return true;
    }
  }

  this.show = function() {
    ellipse(this.posX, this.posY, this.size, this.size);
  }

  this.hit = function(playerPosX, playerPosY) {

  }
}
