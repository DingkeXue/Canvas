$(document).ready(function() {


    let submit = document.querySelector("#submit");
    submit.addEventListener("click", preventDefault);

    function stopBubble(e) {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }
    }

    function preventDefault(e) {
        if (e && e.preventDefault)
            e.preventDefault();
        else
            window.event.returnValue = false;
    }

    $("#submit").on("click", function () {
        return false;
    });

    let canvas = document.getElementById("mycanvas");
    let cont = canvas.getContext("2d");

    let ball = {
        x: 100,
        y: 100,
        vx: 4,
        vy: 2,
        radius: 30,
        color: "yellow",
        draw: function () {
            cont.beginPath();
            cont.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
            cont.closePath();
            cont.fillStyle = this.color;
            cont.fill();
        }
    };

    function draw() {
        cont.fillStyle = "rgba(255, 255, 255, .5)";
        cont.fillRect(0, 0, canvas.width, canvas.height);
        ball.draw();
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.y + ball.vy > canvas.height - 30 || ball.y + ball.vy < 30) {
            ball.vy = -ball.vy;
        }

        if (ball.x + ball.vx > canvas.width - 30 || ball.x + ball.vx < 30) {
            ball.vx = -ball.vx;
        }

        window.requestAnimationFrame(draw);
    }

    draw();
});