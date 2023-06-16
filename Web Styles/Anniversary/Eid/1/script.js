function rgb() {
  var clrs = ["", "red", "#81FF00", "#FFEF00", "#fd80f0"];
  return clrs[Math.ceil(Math.random() * clrs.length)];
}
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var balls = [];

function render() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (var i = 0; i < balls.length; i++) {
    ctx.fillStyle = balls[i].clr;
    ctx.beginPath();
    ctx.arc(balls[i].x, balls[i].y, balls[i].r, 0, Math.PI * 2, false);
    ctx.fill();
    animate(balls[i], i);
  }
  requestAnimationFrame(render);
}
render();

function animate(b, i) {
  b.x += b.vx;
  b.y += b.vy;
  b.r -= 0.1;
  if (b.r <= 0.1) {
    balls.splice(i, 1);
  }
}

var rockets = [];
setInterval(function () {
  var obj = {
    x: Math.random() * innerWidth,
    y: innerHeight,
    r: 5,
    v: Math.random() * 3.5 + 0.5,
    ex: Math.random() * (innerHeight / 1.5),
    clr: rgb()
  };
  rockets.push(obj);
}, 250);
function launchRocket() {
  for (var i = 0; i < rockets.length; i++) {
    ctx.fillStyle = rockets[i].clr;
    ctx.beginPath();
    ctx.arc(rockets[i].x, rockets[i].y, rockets[i].r, 0, Math.PI * 2, false);
    ctx.fill();
    animateRocket(rockets[i], i);
  }
  requestAnimationFrame(launchRocket);
}
launchRocket();
function animateRocket(b, i) {
  b.y -= b.v;
  if (b.y <= b.ex) {
    var _x = b.x;
    var _y = b.y;
    var _clr = b.clr;
    rockets.splice(i, 1);
    for (var i = 0; i < 5; i++) {
      var _vx = Math.random() * 2;
      var _vy = Math.random() * 2;
      var obj = {
        x: _x,
        y: _y,
        r: Math.random() * 7,
        clr: _clr,
        vx: _vx,
        vy: _vy
      };
      balls.push(obj);
    }
    for (var i = 0; i < 5; i++) {
      var _vx = Math.random() * 2;
      var _vy = Math.random() * 2;
      _vx = -_vx;
      _vy = -_vy;
      var obj = {
        x: _x,
        y: _y,
        r: Math.random() * 7,
        clr: _clr,
        vx: _vx,
        vy: _vy
      };
      balls.push(obj);
    }
  }
}