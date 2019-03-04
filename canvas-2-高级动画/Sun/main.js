let sun, earth, moon, ctx;

function init() {
    sun = new Image();
    earth = new Image();
    moon = new Image();
    sun.src = "img/sun.png";
    earth.src = "img/earth.png";
    moon.src = "img/moon.png";

    let canvas = document.getElementById("solar");
    if (!canvas.getContext) return;
    ctx = canvas.getContext('2d');

    sun.onload = function () {
        draw();
    }
}

init();

function draw() {
    ctx.clearRect(0, 0, 600, 300);

    // 绘制太阳
    ctx.drawImage(sun, 150, 70, 20, 20);

    ctx.save();
    ctx.translate(160, 80);

    // 绘制地球轨道
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 255, 255, .1)";
    ctx.arc(0, 0, 50, 0, Math.PI * 2);
    ctx.stroke();

    let time = new Date();
    // 绘制地球
    ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI  / 60000 * time.getMilliseconds());
    ctx.translate(55, 0);
    ctx.drawImage(earth, -10, -10);

    // 绘制月球
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 255, 255, .2)";
    ctx.arc(0, 0, 20, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI  / 6000 * time.getMilliseconds())
    ctx.translate(20, 20);
    ctx.drawImage(moon, -12, -12);
    ctx.restore();

    requestAnimationFrame(draw);

}

