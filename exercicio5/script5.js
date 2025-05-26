let aleatorio = parseInt(Math.random() * 101)
let mostraresultado = document.querySelector("#resultado"); 
let jogador;

function pensar() {
    jogador = number (window.prompt("Digite um numero entre 1 e 100"));

    if (jogador != aleatorio) {

        if(jogador > aleatorio) {
            mostraresultado.innerHTML = `<p>Voce errou, tente um numero MENOR!</p>`;
        } else {
            mostraresultado.innerHTML = `<p>Voce errou,tente um numero MAIOR!</p>`;
        }
    } else {
        mostraresultado.innerHTML = `<p> Parabens! Voce acertou o numero ${aleatorio}.</p>`;
    
    }

    
}
