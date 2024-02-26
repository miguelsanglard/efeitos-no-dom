// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const background = document.querySelector('body')

// let i = 0;
// setInterval(() => {
//   background.classList.toggle('verde')
//   console.log(i++);
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', initClick)
pausar.addEventListener('click', pauseClick)
pausar.addEventListener('dblclick', resetarClick)

let i = 0;
let timer;
function initClick() {
  timer = setInterval(() => {
    tempo.innerHTML = i++;
  }, 500);
  // iniciar.setAttribute('disabled', '')
}
function pauseClick() {
  clearInterval(timer)
  iniciar.removeAttribute('.iniciar', '')
}
function resetarClick() {
  console.log('a')
}


console.log(iniciar)
