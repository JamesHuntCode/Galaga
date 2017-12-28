function star(x, y) {
  this.posX = x;
  this.posY = y;
  this.size = 5;
  this.velocity = Math.floor(Math.random() * 10) + 2;

  this.update = function() {
    this.posY += this.velocity;
  }

  this.show = function() {
    ellipse(this.posX, this.posY, this.size, this.size);
  }

  this.bounds = function() {
    if ((this.posY - this.size / 2) > height) {
      this.posY = 0;
    }
  }
}
