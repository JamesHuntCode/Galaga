function laser(x, y) {
  this.posX = x;
  this.posY = y;
  this.size = 5;
  this.velocity = 15;

  this.update = function() {
    this.posY -= this.velocity;
  }

  this.offScreen = function() {
    if (this.posY < 0) {
      return true;
    }
  }

  this.show = function() {
    ellipse(this.posX, this.posY, this.size, this.size);
  }

  this.hit = function(alien) {
    
  }
}
