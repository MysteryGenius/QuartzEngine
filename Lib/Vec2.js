var Vec2 = function (x, y) {
  this.x = x;
  this.y = y;
};

Vec2.prototype.length = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vec2.prototype.add = function (vec) {
  return new Vec2(vec.x + this.x, vec.y + this.y);
};

Vec2.prototype.subtract = function (vec) {
  return new Vec2(this.x - vec.x, this.y - vec.y);
};

Vec2.prototype;
