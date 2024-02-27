// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const background = document.querySelector('body')

// let i = 0;
// setInterval(() => {
//   background.classList.toggle('verde')
//   console.log(i++);
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const buttonIniciar = document.querySelector('.iniciar')
const buttonPausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

buttonIniciar.addEventListener('click', clickIniciar)
buttonPausar.addEventListener('click', clickPausar)
buttonPausar.addEventListener('dblclick', clickResetar)

let i = 0
let timer

function clickIniciar() {
  timer = setInterval(() => {
    tempo.innerHTML = i++
  }, 1000);
  buttonIniciar.setAttribute('disabled', '')
}
function clickPausar() {
  clearTimeout(timer)
  buttonIniciar.removeAttribute('disabled', '')

}
function clickResetar() {
  tempo.innerHTML = 0
  i = 0
}


