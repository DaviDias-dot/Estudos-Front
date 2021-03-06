let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0,
    // antiHor: true, efeito de apagar
}

function drawCircle(c) {
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "blue"
    ctx.strokeStyle = "red";

    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim) //c.antiHor)

    ctx.fill();
    ctx.stroke();
}

setInterval(function() {

    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.3;
        circle.x += 3;
    }

    drawCircle(circle)
}, 40)