const tabela = document.querySelector('#pixel-board');
const localBotao = document.querySelector('#botao');
document.querySelectorAll('.color')[0].style.background = "black";
document.querySelectorAll('.color')[1].style.background = corAleatoria();
document.querySelectorAll('.color')[2].style.background = corAleatoria();
document.querySelectorAll('.color')[3].style.background = corAleatoria();
let n;
function criaBoard(n) {
  for (let i = 0; i < n; i += 1) {
    let linhas = document.createElement('tr');
    tabela.appendChild(linhas);
    linhas.className = 'linha';
    for (let i = 0; i < n; i += 1) {
      let colunas = document.createElement('td');
      linhas.appendChild(colunas);
      colunas.className = 'pixel';
    }
  }
}

let recebeEntrada = document.querySelector('#board-size');
let botao2 = document.querySelector('#generate-board');
let c = 0;
botao2.addEventListener('click', function () {
  let linhaN = document.querySelectorAll('.linha');
  n = recebeEntrada.value;
  if (n === '' || n < 5) {
    alert('Valor inválido!');
  }
  for (let i = 0; i < linhaN.length; i += 1) {
    tabela.removeChild(tabela.lastChild);
  }

  if (n <= 5) {
    criaBoard(5);
  } else if (n >= 50) {
    criaBoard(50);
  } else {
    criaBoard(n);
  }
});

let color1 = document.querySelectorAll('.color')[0];
let color2 = document.querySelectorAll('.color')[1];
let color3 = document.querySelectorAll('.color')[2];
let color4 = document.querySelectorAll('.color')[3];

color1.addEventListener('click', function () {
  color1.className = 'color selected';
  color2.className = 'color';
  color3.className = 'color';
  color4.className = 'color';
});
color2.addEventListener('click', function () {
  color1.className = 'color';
  color2.className = 'color selected';
  color3.className = 'color';
  color4.className = 'color';
});
color3.addEventListener('click', function () {
  color1.className = 'color';
  color2.className = 'color';
  color3.className = 'color selected';
  color4.className = 'color';
});
color4.addEventListener('click', function () {
  color1.className = 'color';
  color2.className = 'color';
  color3.className = 'color';
  color4.className = 'color selected';
});
function corAleatoria() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

let corPixel = document.querySelector('#pixel-board');
corPixel.addEventListener('click', function (evento) {
  evento.target.style.backgroundColor = document.querySelector(
    '.selected'
  ).style.backgroundColor;
  console.log(document.querySelector('.selected').style.backgroundColor);
});

let botao = document.createElement('button');
localBotao.appendChild(botao);
botao.className = 'botaoStyle';
botao.id = 'clear-board';
botao.innerText = 'Limpar';
botao.addEventListener('click', function () {
  for (let i = 0; i < n * n; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
});

window.onload = document.querySelectorAll('.color')[0].className =
  'color selected';
window.onload=criaBoard(5);
