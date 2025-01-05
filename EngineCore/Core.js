var gObjectNum = 0;
var gEngine = gEngine || {};
gEngine.Core = (function () {
  let mAllObjects = [];

  let mCurrentTime,
    mElapsedTime,
    mPreviousTime = Date.now();

  let mCanvas,
    mContext,
    mWidth = 800,
    mHeight = 450,
    mLagTime = 0;

  let kFPS = 60,
    kFrameTime = 1 / kFPS;

  let mUpdateIntervalInSeconds = kFrameTime;

  let kMPF = 1000 * kFrameTime; // Milliseconds per frame

  mCanvas = document.getElementById("canvas");
  mContext = mCanvas.getContext("2d");
  mCanvas.width = mWidth;
  mCanvas.height = mHeight;

  let runGameLoop = function () {
    requestAnimationFrame(() => runGameLoop());

    // compute time elapsed since last loop
    mCurrentTime = Date.now();
    mElapsedTime = mCurrentTime - mPreviousTime;
    mPreviousTime = mCurrentTime;
    mLagTime += mElapsedTime;

    // Update only every MPF
    while (mLagTime >= kMPF) {
      mLagTime -= kFPS;
      update();
    }

    updateUIEcho();
    draw();
  };

  let updateUIEcho = function () {
    document.getElementById("uiEchoString").innerHTML = `
      <p><b>Selected Object:</b></p>
      <ul style="margin: -10px">
        <li>ID: ${gObjectNum}</li>
        <li>Centre: ${mAllObjects[gObjectNum]?.mCentre.x.toPrecision(3)}, ${mAllObjects[gObjectNum]?.mCentre.y.toPrecision(3)}</li>
        <li>Angle: ${mAllObjects[gObjectNum].mAngle.toPrecision(3)}</li>
      </ul>
      <br/>
      <p><b>Controls:</b></p>
      <ul style="margin: -10px">
      <li><b>Num</b> or <b>Up/Down Arrow</b>: SelectObject</li>
      <li><b>WASD</b> + <b>QE</b>: Position [Move + Rotate]</li>
      <li><b>F/G</b>: Spawn [Rectangle/Circle] at random location</li>
      <li><b>H</b>: Fix Object</li>
      <li><b>R</b>: Reset System</li>
      </ul>
      <br/>
    `;
  };

  let draw = function () {
    mContext.clearRect(0, 0, mWidth, mHeight);
    let i;
    for (i = 0; i < mAllObjects.length; i++) {
      mContext.strokeStyle = "blue";
      if (i === gObjectNum) mContext.strokeStyle = "red";
      mAllObjects[i].draw(mContext);
    }
  };

  let update = function () {
    for (let i = 0; i < mAllObjects.length; i++) {
      mAllObjects[i].update(mContext);
    }
  };

  let initializeEngineCore = function () {
    runGameLoop();
  };

  let mPublic = {
    initializeEngineCore: initializeEngineCore,
    mAllObjects: mAllObjects,
    mWidth: mWidth,
    mHeight: mHeight,
    mContext: mContext,
  };

  return mPublic;
})();
