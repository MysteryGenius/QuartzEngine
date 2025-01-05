function RigidShape(centre) {
  this.mCentre = centre;
  this.mAngle = 0;
  gEngine.Core.mAllObjects.push(this);
}

RigidShape.prototype.update = function () {
  if (this.mCentre.y < gEngine.Core.mHeight && this.mFix == 0) this.move(new Vec2(0, 1));
};
