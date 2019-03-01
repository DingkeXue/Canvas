$(document).ready(function() {

    let canvas = document.getElementById("myCanvas");
    if (!canvas.getContext) return;
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = "timg.jpg";
    ctx.drawImage(img, 0, 0);
    let font = document.getElementById("color");

    function draw(event) {
        let x = event.layerX;
        let y = event.layerY;
        let area = ctx.getImageData(x, y, 1, 1);
        let data = area.data;
        let rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';
        font.style.color = rgba;
        font.textContent = rgba;
    }

    canvas.addEventListener('mousemove', draw);
});