function userControl(event) {
  let keyCode;

  if (event.which) {
    keyCode = event.which;
  } else {
    keyCode = event.keyCode;
  }

  let width = gEngine.Core.mWidth;
  let height = gEngine.Core.mHeight;
  let context = gEngine.Core.mContext;

  // f
  if (keyCode === 70) {
    let centre = new Vec2(gEngine.Core.mAllObjects[gObjectNum].mCentre.x, gEngine.Core.mAllObjects[gObjectNum].mCentre.y);
    new Rectangle(centre, Math.random() * 30 + 10, Math.random() * 30 + 10, false);
  }
  // g
  if (keyCode === 71) {
    let centre = new Vec2(gEngine.Core.mAllObjects[gObjectNum].mCentre.x, gEngine.Core.mAllObjects[gObjectNum].mCentre.y);
    new Circle(centre, Math.random() * 10 + 20, false);
  }

  // Numbers
  if (keyCode >= 48 && keyCode <= 57) {
    let num = keyCode - 48;
    if (num < gEngine.Core.mAllObjects.length) {
      gObjectNum = num;
    }
  }

  // up arrow
  if (keyCode === 38) {
    if (gObjectNum < gEngine.Core.mAllObjects.length - 1) {
      gObjectNum++;
    }
  }

  // down arrow
  if (keyCode === 40) {
    if (gObjectNum > 0) {
      gObjectNum--;
    }
  }

  // W
  if (keyCode === 87) {
    gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, -10));
  }

  // A
  if (keyCode === 83) {
    gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, +10));
  }

  // S
  if (keyCode === 65) {
    gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(-10, 0));
  }

  // D
  if (keyCode === 68) {
    gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(10, 0));
  }

  // Rotate

  // Q
  if (keyCode === 81) {
    gEngine.Core.mAllObjects[gObjectNum].rotate(-0.1);
  }

  // E
  if (keyCode === 69) {
    gEngine.Core.mAllObjects[gObjectNum].rotate(0.1);
  }

  // Toggle gravity

  // H
  if (keyCode === 72) {
    if (gEngine.Core.mAllObjects[gObjectNum].mFix === 0) gEngine.Core.mAllObjects[gObjectNum].mFix = 1;
    else gEngine.Core.mAllObjects[gObjectNum].mFix = 0;
  }

  // R
  if (keyCode === 82) {
    gEngine.Core.mAllObjects.splice(5, gEngine.Core.mAllObjects.length);
    gObjectNum = 0;
  }
}
