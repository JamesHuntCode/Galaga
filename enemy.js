function enemy(x, y) {
  this.posX = x;
  this.posY = y;
  this.size = 40;
  this.velocityX = Math.floor(Math.random() * 3) + 2;
  this.velocityY = Math.floor(Math.random() * 3) + 2;

  // Move enemy ship and random velocities
  this.update = function() {
    this.posX += this.velocityX;
    this.posY += this.velocityY / 2;
  }

  // Draw enemy ship
  this.show = function() {
    triangle(this.posX, this.posY, this.posX - this.size / 2, this.posY - this.size, this.posX + this.size / 2, this.posY - this.size);
  }

  // Reset position X & Y values if enemy ship moves too far one way
  this.bounds = function() {
    if (this.posX - this.size / 2 > width) {
      this.posX = 0 - this.size / 2;
    } else if (this.posX + this.size / 2 < 0) {
      this.posX = width + this.size / 2;
    }

    if (this.posY - this.size / 2 > height) {
      this.posY = 0 - this.size / 2;
    } else if (this.posY + this.size / 2 < 0) {
      this.posY = height + this.size / 2;
    }
  }

  // Check location of player in relation to enemy ship and return bool
  this.hasClearShot = function(playerPosX) {
    if ((this.posX - this.size * 2 < playerPosX) && (this.posX + this.size * 2 > playerPosX) && (Math.floor(Math.random() * 50) === 25)) {
      return true;
    } else {
      return false;
    }
  }

  // Check if enemy ship has hit player icon
  this.touches = function(playerPosX, playerPosY) {

  }
}
