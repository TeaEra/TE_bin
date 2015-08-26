/**
 * Created by teaera on 2015-08-24;
 */

/* Import */

/* Export */
var modTECanvas = {};
module.exports = modTECanvas;

modTECanvas.error = function (msg) {
  console.log('> modTECanvas: ' + msg);
};

modTECanvas.init = function (elemId, info) {
  var
    elem = document.getElementById(elemId);
  if (!elem) {
    this.error('illegal elemId');
  }
  var
    ctx = elem.getContext('2d');  // PAT: lowercase!!!
  if (!ctx) {
    this.error('not canvas');
  }
  //
  elem.width = '100%';
  elem.height = '100%';
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2*Math.PI);
  ctx.stroke();
};
