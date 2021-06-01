let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let img = new Image();
img.src = "./Imagem/red.png"

img.onload = desenharImg;

function desenharImg() {
    ctx.drawImage(this, 20, 20);
}