function enemy(x, y) {
  this.posX = x;
  this.posY = y;
  this.size = 40;
  this.velocityX = Math.floor(Math.random() * 7) + 2;
  this.velocityY = Math.floor(Math.random() * 7) + 2;

  this.update = function() {
    this.posX += this.velocityX;
  }

  this.show = function() {
    triangle(this.posX, this.posY, this.posX - this.size / 2, this.posY - this.size, this.posX + this.size / 2, this.posY - this.size);
  }

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

  this.hasClearShot = function(playerPosX) {
    if ((this.posX - this.size * 2 < playerPosX) && (this.posX + this.size * 2 > playerPosX) && (Math.floor(Math.random() * 10) === 5)) {
      return true;
    } else {
      return false;
    }
  }
}
