let canvas = document.getElementById("mycanvas");

if (canvas.getContext) {
    let cxt = canvas.getContext("2d");

    //画直线
    /*cxt.beginPath();
    cxt.moveTo(75, 50);
    cxt.lineTo(100, 75);
    cxt.lineTo(100, 25);
    cxt.lineTo(200, 100);
    cxt.lineWidth = 5;
    cxt.lineCap = "round";
    cxt.strokeStyle = "red";
    cxt.lineJoin = "round";
    cxt.globalAlpha = 0.5;
    cxt.stroke();*/

    // 画虚线
    /*let offset = 0;
    function draw() {
        offset++;
        if (offset > 10) {
            offset = 0;
        } else {
            cxt.clearRect(0, 0, canvas.width, canvas.height);
            cxt.setLineDash([20, 2]);
            cxt.lineDashOffset = -offset;
            cxt.strokeRect(10, 10, 100, 100);
        }
    }

    setInterval(draw, 100);*/

    // 渐变色
    /*let bg = cxt.createLinearGradient(100, 100, 300, 300);
    bg.addColorStop(0, "yellow");
    bg.addColorStop(0.5, "pink");
    bg.addColorStop(1, "green");
    cxt.fillStyle = bg;
    cxt.fillRect(30, 30, 300, 300);*/

    // 文字
    /*cxt.shadowOffsetX = 4;
    cxt.shadowOffsetY = 8;
    cxt.shadowBlur = 5;
    cxt.shadowColor = "black";
    cxt.font = "30px Times New Roman";
    cxt.fillStyle = "green";
    cxt.fillText("Hello", 20, 20);
    cxt.strokeStyle = "blue";
    cxt.strokeText("World", 20, 100);*/

    /*let img = new Image();
    img.src="./img/time.jpg";
    cxt.drawImage(img, 0, 0);*/

    // canvas 画图状态。save，restore
    /*cxt.fillStyle = "black";
    cxt.fillRect(0, 0, 200, 200);
    cxt.save();
    cxt.fillStyle = "#fff";
    cxt.fillRect(20, 20, 160, 160);
    cxt.restore();
    cxt.fillStyle = "black";
    cxt.fillRect(40, 40, 100, 100);*/

    // 位移
    /*for (let i = 1; i < 5; i++) {
        cxt.save();
        cxt.fillStyle = "pink";
        cxt.translate(100*i, 0);
        cxt.fillRect(0, 0, 50, 50);
        cxt.restore();

    }*/
    /*cxt.fillStyle = "pink";
    cxt.save();
    cxt.fillRect(0, 100, 50, 50);

    cxt.fillStyle = "green";
    cxt.save();
    cxt.fillRect(100, 100, 50, 50);

    cxt.restore();
    cxt.fillRect(200, 100, 50, 50);

    cxt.restore();
    cxt.fillRect(300, 100, 50, 50);

    cxt.fillRect(400, 100, 50, 50);*/

    // 缩放
    /*cxt.fillStyle = "red";
    cxt.scale(0.5, 0.5);
    cxt.beginPath();
    cxt.arc(100, 100, 60, 0, Math.PI*2);
    cxt.fill();*/

    /*绘制三角形边框*/
    /*function draw() {
        let canvas = document.getElementById("mycanvas");
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 0);
        ctx.lineTo(50, 50);
        ctx.closePath();
        ctx.stroke();
    }*/

    /*实心三角形*/
    /*function draw() {
        let canvas = document.getElementById("mycanvas");
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 0);
        ctx.lineTo(100, 100);
        ctx.closePath();
        ctx.fill();
    }*/

    /*画空心圆*/
    /*function draw() {
        let canvas = document.getElementById('mycanvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, Math.PI*2, false);
        ctx.closePath();
        ctx.stroke();
    }*/

    /*画实心圆*/
    /*function draw() {
        let canvas = document.getElementById('mycanvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI*2, false);
        ctx.closePath();
        ctx.fill();
    }*/

    /*画圆弧1*/
    /*function draw() {
        let canvas = document.getElementById('mycanvas');
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(50, 50, 40, -Math.PI / 2, Math.PI / 2, false);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(150, 50, 40, 0, -Math.PI / 2, true);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(50, 150, 40, -Math.PI / 2, Math.PI / 2, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(150, 150, 40, 0, Math.PI, true);
        ctx.fill();
    }*/

    /*acrTo画圆弧*/
    /*function draw() {
        let canvas = document.getElementById('mycanvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.arcTo(200, 50, 200, 200, 100);
        ctx.lineTo(200, 200);
        ctx.stroke();
    }
*/

    /*贝塞尔曲线绘制*/
    /*function draw() {
        let canvas = document.getElementById('mycanvas');
        let ctx = canvas.getContext('2d');
        let cp1x = 40, cp1y = 50; // 二次贝塞尔曲线控制点
        let x = 100, y = 200; // 结束点

        ctx.beginPath();
        ctx.moveTo(10, 100); // 起始点
        ctx.quadraticCurveTo(cp1x, cp1y, x, y); // 绘制二次贝塞尔曲线
        ctx.stroke();

        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(150, 10, 200, 150);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.bezierCurveTo(50, 100, 100, 10, 300, 150);
        ctx.stroke();

    }*/

    function draw() {
        let canvas = document.getElementById('mycanvas');
        if (!canvas.getContext) return;
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.save();

        ctx.translate(100, 100);
        ctx.rotate(Math.PI / 180 * 45);
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 100, 100);
        ctx.restore();

        ctx.save();
        ctx.translate(0, 0);
        ctx.fillRect(0, 0, 50, 50);
        /*ctx.restore();*/

    }


    draw();

} else {
    alert("您的浏览器不支持canvas！");
}