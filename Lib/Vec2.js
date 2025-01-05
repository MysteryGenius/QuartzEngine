var Vec2 = function (x, y) {
  this.x = x;
  this.y = y;
};

Vec2.prototype.length = function () {
  return vectorDistance(this.x, this.y);
};

Vec2.prototype.add = function (vec) {
  return new Vec2(vec.x + this.x, vec.y + this.y);
};

Vec2.prototype.subtract = function (vec) {
  return new Vec2(this.x - vec.x, this.y - vec.y);
};

Vec2.prototype.scale = function (n) {
  return new Vec2(this.x * n, this.y * n);
};

Vec2.prototype.dot = function (vec) {
  return this.x * vec.x + this.y * vec.y;
};

Vec2.prototype.cross = function (vec) {
  return this.x * vec.x - this.y * vec.y;
};

Vec2.prototype.rotate = function (centre, angle) {
  // rotate counterclockwise
  let r = [];
  let x = this.x - centre.x;
  let y = this.y - centre.y;
  r[0] = x * Math.cos(angle) - y * Math.sin(angle);
  r[1] = x * Math.sin(angle) + y * Math.cos(angle);

  r[0] += centre.x;
  r[1] += centre.y;

  return new Vec2(r[0], r[1]);
};

Vec2.prototype.normalise = function () {
  let len = this.length;
  if (len > 0) len = 1 / len;
  return new Vec2(this.x * len, this.y * len);
};

Vec2.prototype.distance = function (vec) {
  let x = this.x - vec.x;
  let y = this.y - vec.y;
  return vectorDistance(x, y);
};

function vectorDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}
