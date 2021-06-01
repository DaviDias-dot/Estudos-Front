let video = document.getElementById("video1");

function retroceder() {
    video.correntTime -= 15;
}

function avancar() {
    video.correntTime += 15;
}

function diminuir_vel() {
    video.playbackRate -= 0.1;
}

function aumentar_vel() {
    video.playbackRate += 0.1;
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function play() {
    video.play();
}