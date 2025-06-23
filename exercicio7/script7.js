// variaveis globais para contagem
let contadorCliques = 0;

function clique() {
    //incrementa o numero de cliques
    contadorCliques++;

    // atualiza a contagem de cliques na pagina
    document.getElementById('cliques').textContent = contadorCliques;

    // verifica se ja completoou 10 cliques para exibir o emoji
    if (contadorCliques % 10 ==0) {
        document.getElementById('emoji').textContent = ' (◕‿◕) '; //exibe o emoji
    }
}

function zerarContagem() {
    // reseta a contagem de cliques e atualiza a pagina
    contadorCliques = 0;
    document.getElementById('cliques').textContent = contadorCliques;
    document.getElementById('emoji').textContent = ''; // Remove o emoji
}
