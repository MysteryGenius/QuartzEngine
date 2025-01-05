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
    context.strokeRect(Math.random() * width * 0.8, Math.random() * height * 0.8, Math.random() * 30 + 10, Math.random() * 30 + 10);
  }
  // g
  if (keyCode === 71) {
    context.beginPath();
    context.arc(Math.random() * width * 0.8, Math.random() * height * 0.8, Math.random() * 30 + 10, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
  }
}
