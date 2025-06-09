// Gera um número aleatório entre 1 e 100
let aleatorio = parseInt(Math.random() * 100) + 1;
let computador = document.querySelector("#resultado"); // Corrigido para "resultado"
let jogador;
let tentativas = 0;

function pensar() {
  jogador = Number(window.prompt("Digite um número entre 1 e 100"));

  if(jogador > 0 && jogador < 101) {

    tentativas += 1;

  if (jogador != aleatorio) {

    if (jogador > aleatorio) {
      computador.innerHTML += `<p><b>TENTATIVA ${tentativas}:</b>Você tentou o numero <b>${jogador}</b>, tente um número <b>MENOR!</b></p>`;
    } else {
      computador.innerHTML += `<p><b>TENTATIVA ${tentativas}:Você tentou o numero <b>${jogador}</b>, tente um número <b>MAIOR!</b></p>`;
    }
  } else {
    computador.innerHTML += `<p><b> Parabens!Você acertou o numero ${aleatorio} em ${tentativas} tentativas.<b/></p>`;
  }

  } else { alert("Por favor, digite um numero entre 1 e 100.");
}
}