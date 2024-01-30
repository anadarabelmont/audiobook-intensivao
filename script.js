const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const audioCapitulo = document.getElementById("audio-capitulo");
const numeroCapitulos = 10;
const nomeCapitulo = document.getElementById("capitulo");

let taTocando = 0;
let capituloAtual = 1;

//para dar play
function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
}

//para pausar
function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  botaoPlayPause.classList.add("bi-play-circle-fill");
}

//para tocar/pausar
function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    pausarFaixa();
    taTocando = 0;
  }
}

function trocarNomeFaixa() {
  nomeCapitulo.innerText = "Capitulo " + capituloAtual;
}

//avançar faixa
function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }

  audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();
}

//voltar faixa
function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();
}

botaoVoltar.addEventListener("click", voltarFaixa);
botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
