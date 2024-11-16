var carrosel;
var fotos;
var indice;
var temporizador;

const botaoAvanca = document.getElementById("avanca");
const botaoVolta = document.getElementById("volta");
const tempoIntervalo = 3000;

indice = 0;

carrosel = document.getElementById("carrosel");

fotos = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

window.onload = inicio;

function inicio() {
  botaoAvanca.onclick = avancaImg;
  botaoVolta.onclick = voltaImg;
  mostraImg();
}

function mostraImg() {
  carrosel.src = "../img/" + fotos[indice];
}

function avancaImg() {
  if (indice < fotos.length - 1) {
    indice++;
  } else {
    indice = 0;
  }
  mostraImg();
}

function voltaImg() {
  if (indice > 0) {
    indice--;
  } else {
    indice = fotos.length - 1;
  }
  mostraImg();
}
