var canvas = document.getElementById('canvas');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);

  ctx.font = '20px cursive';
  ctx.fillStyle = 'white';

  ctx.fillText('Happy Mothers', 150, 100);
  ctx.fillText('Day!', 150, 120);
  ctx.fill();
}
