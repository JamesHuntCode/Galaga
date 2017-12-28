function enemy(x, y) {
  this.posX = x;
  this.posY = y;
  this.size = 40;

  this.update = function() {

  }

  this.show = function() {
    triangle(this.posX, this.posY, this.posX - this.size / 2, this.posY - this.size, this.posX + this.size / 2, this.posY - this.size);
  }

  this.shoot = function() {
    return (Math.random() > 0.5);
  }
}
