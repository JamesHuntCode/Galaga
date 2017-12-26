function spaceship(x, y) {
  this.posX = x;
  this.posY = y;
  this.size = 40;

  this.move = function(direction) {
    if ((direction == "left") && (this.posX - this.size / 2 > 0)) {
      this.posX -= this.size;
    } else if ((direction == "right") && (this.posX + this.size / 2 < width)) {
      this.posX += this.size;
    }
  }

  this.show = function() {
    triangle(this.posX, this.posY, this.posX - this.size / 2, this.posY + this.size, this.posX + this.size / 2, this.posY + this.size);
  }
}
