const Circle = function (centre, radius, fix) {
  RigidShape.call(this, centre);
  this.mType = "Circle";
  this.mRadius = radius;
  this.mFix = fix;
  this.mStartPoint = new Vec2(centre.x, centre.y - radius);
};

const circPrototype = Object.create(RigidShape.prototype);
circPrototype.constructor = Circle;
Circle.prototype = circPrototype;

Circle.prototype.draw = function (context) {
  context.beginPath();
  context.arc(this.mCentre.x, this.mCentre.y, this.mRadius, 0, Math.PI * 2, true);
  context.lineTo(this.mCentre.x, this.mCentre.y);
  context.closePath();
  context.stroke();
};

Circle.prototype.move = function (s) {
  this.mStartPoint = this.mStartPoint.add(s);
  this.mCentre = this.mCentre.add(s);
  return this;
};

Circle.prototype.rotate = function (angle) {
  this.mAngle += angle;
  this.mStartPoint = this.mStartPoint.rotate(this.mCentre, angle);
  return this;
};
