init();

function init() {
    let canvas = document.getElementById("canvas");
    if (!canvas.getContext) return;
    ctx = canvas.getContext('2d');
    draw(ctx);
}

function draw(ctx) {
    requestAnimationFrame(function module() {
        drawDial(ctx); // 绘制表盘
        drawAllHands(ctx); // 绘制指针
        requestAnimationFrame(module);
    });
}



function drawDial(ctx) {  // 绘制表盘
    let pi = Math.PI;

    ctx.clearRect(0, 0, 300, 300);
    ctx.save();

    ctx.translate(150, 150);
    ctx.beginPath();
    ctx.strokeStyle = "#444";
    ctx.arc(0, 0, 148, 0, 2 * pi);
    ctx.stroke();
    ctx.closePath();

    for (let i = 0; i < 60; i ++) { // 绘制表盘内的刻度
        ctx.save();
        ctx.rotate(-pi / 2 + i * pi / 30);
        ctx.beginPath();
        ctx.moveTo(110, 0);
        ctx.lineTo(140, 0);
        ctx.lineWidth = i % 5 ? 2 : 4;
        ctx.strokeStyle = i % 5 ? "#888" : "#222";
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    
    ctx.restore();
}

function drawAllHands() {
    let time = new Date();

    let s = time.getSeconds();
    let m = time.getMinutes();
    let h = time.getHours();

    let pi = Math.PI;
    let secondAngle = pi / 180 * 6 * s;  // 计算出秒针每次转动的弧度
    let minuteAngle = pi / 180 * 6 * m + secondAngle / 60; // 计算出分钟每次转动的弧度
    let hourAngle = pi / 180 * 30 * h + minuteAngle / 12; // 计算出时针每次转动的弧度

    drawHand(hourAngle, 60, 6, "#222", ctx);
    drawHand(minuteAngle, 80, 4, "#555", ctx);
    drawHand(secondAngle, 100, 2, "#00bcd4", ctx);
}

function drawHand(angle, length, width, color, ctx) {  // 绘制秒针、分针、时针
    ctx.save();
    ctx.translate(150, 150);
    ctx.rotate(-Math.PI / 2 + angle);
    ctx.beginPath();
    ctx.moveTo(-3, 0);
    ctx.lineTo(length, 0);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}
