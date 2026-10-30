let audio = document.getElementById("reproductor-nativo");
let titulo = document.getElementById("titulo-cancion");
let imagen = document.getElementById("imagen-cancion");
let btnPlay = document.getElementById("btn-play");
let btnPause = document.getElementById("btn-pause");
let barraVolumen = document.getElementById("barra-volumen");

btnPlay.onclick = function() {
    audio.play();
};

btnPause.onclick = function() {
    audio.pause();
};

barraVolumen.onchange = function() {
    audio.volume = barraVolumen.value / 100; 
};


let pista1 = document.getElementById("cancion1");
pista1.onclick = function() {
    audio.src = "../Resources/audio/CACTUS.mp3";
    titulo.innerText = "1. Cactus";
    imagen.src = "../Resources/img/cactus.jpg";
    audio.play();
};

let pista2 = document.getElementById("cancion2");
pista2.onclick = function() {
    audio.src = "../Resources/audio/MENTE.mp3";
    titulo.innerText = "2. si en tu mente estuve";
    imagen.src = "../Resources/img/sientumenteestuve.jpg";
    audio.play();
};

let pista3 = document.getElementById("cancion3");
pista3.onclick = function() {
    audio.src = "../Resources/audio/MIENTEME.mp3";
    titulo.innerText = "3. Mienteme";
    imagen.src = "../Resources/img/Mienteme.jpg";
    audio.play();
};

let pista4 = document.getElementById("cancion4");
pista4.onclick = function() {
    audio.src = "../Resources/audio/MINERO.mp3";
    titulo.innerText = "4. Minero";
    imagen.src = "../Resources/img/minero.jpg";
    audio.play();
};

let pista5 = document.getElementById("cancion5");
pista5.onclick = function() {
    audio.src = "../Resources/audio/NOTE.mp3";
    titulo.innerText = "5. No Te Contaron Mal";
    imagen.src = "../Resources/img/No_Te_Contaron_Mal.jpg";
    audio.play();
};

let pista6 = document.getElementById("cancion6");
pista6.onclick = function() {
    audio.src = "../Resources/audio/NUNCA.mp3";
    titulo.innerText = "6. Nunca te olvide";
    imagen.src = "../Resources/img/morat_nunca_te_olvide.jpg";
    audio.play();
};

let pista7 = document.getElementById("cancion7");
pista7.onclick = function() {
    audio.src = "../Resources/audio/PROX.mp3";
    titulo.innerText = "7. En el proximo big bang";
    imagen.src = "../Resources/img/bigbang.jpg";
    audio.play();
};

let pista8 = document.getElementById("cancion8");
pista8.onclick = function() {
    audio.src = "../Resources/audio/TEFALLE.mp3";
    titulo.innerText = "8. Te falle";
    imagen.src = "../Resources/img/tefalle.jpg";
    audio.play();
};

let pista9 = document.getElementById("cancion9");
pista9.onclick = function() {
    audio.src = "../Resources/audio/TONOS.mp3";
    titulo.innerText = "9. Tonos de azul";
    imagen.src = "../Resources/img/tonosdeazul.jpg";
    audio.play();
};

let pista10 = document.getElementById("cancion10");
pista10.onclick = function() {
    audio.src = "../Resources/audio/YANO.mp3";
    titulo.innerText = "10. Ya no somos ni seremos";
    imagen.src = "../Resources/img/ya_no_somos.jpg";
    audio.play();
};