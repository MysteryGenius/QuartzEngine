const Rectangle = function (centre, width, height, fix) {
  RigidShape.call(this, centre);
  this.mType = "Rectangle";
  this.mWidth = width;
  this.mHeight = height;
  this.mFix = fix;
  this.mVertex = [];
  this.mFaceNormal = [];

  // Vectors
  // 0 - TopLeft; 1 - TopRight; 2 - BottomLeft; 3 - BottomRight
  this.mVertex[0] = new Vec2(centre.x - width / 2, centre.y - height / 2);
  this.mVertex[1] = new Vec2(centre.x + width / 2, centre.y - height / 2);
  this.mVertex[2] = new Vec2(centre.x + width / 2, centre.y + height / 2);
  this.mVertex[3] = new Vec2(centre.x - width / 2, centre.y + height / 2);

  // Faces
  // 0 - Top; 1 - Right; 2 - Bottom; 3 - Left
  this.mFaceNormal[0] = this.mVertex[1].subtract(this.mVertex[2]);
  this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);
  this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);
  this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);
};

const rectPrototype = Object.create(RigidShape.prototype);
rectPrototype.constructor = Rectangle;
Rectangle.prototype = rectPrototype;

Rectangle.prototype.draw = function (context) {
  context.save();
  context.translate(this.mVertex[0].x, this.mVertex[0].y);
  context.rotate(this.mAngle);
  context.strokeRect(0, 0, this.mWidth, this.mHeight);
  context.restore();
};

Rectangle.prototype.move = function (v) {
  for (let i = 0; i < this.mVertex.length; i++) {
    this.mVertex[i] = this.mVertex[i].add(v);
  }
  this.mCentre = this.mCentre.add(v);
  return this;
};

Rectangle.prototype.rotate = function (angle) {
  this.mAngle += angle;
  for (let i = 0; i < this.mVertex.length; i++) {
    this.mVertex[i] = this.mVertex[i].rotate(this.mCentre, angle);
  }
  this.mFaceNormal[0] = this.mVertex[1].subtract(this.mVertex[2]);
  this.mFaceNormal[0] = this.mFaceNormal[0].normalize();
  this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);
  this.mFaceNormal[1] = this.mFaceNormal[1].normalize();
  this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);
  this.mFaceNormal[2] = this.mFaceNormal[2].normalize();
  this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);
  this.mFaceNormal[3] = this.mFaceNormal[3].normalize();
};
