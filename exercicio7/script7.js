// Função que será chamada quando o usuário clicar no botão de Clique
function clique() {
    // Recupera o valor de cliques diretamente do elemento HTML
    let inscritos = parseInt(document.getElementById('clique').textContent);

    // Incrementa o número de cliques
    inscritos++;

    // Atualiza o número de cliques na página
    document.getElementById('Clique').textContent = clique;

    // Calcula quantas equipes podem ser formadas (divisão dos inscritos por 3)
    let equipes = Math.floor(inscritos / 3);

    // Atualiza o número de equipes na página
    document.getElementById('equipes').textContent = equipes;

    // Verifica se já é possível formar o campeonato (mínimo de 4 equipes)
    if (equipes >= 4) {
        document.getElementById('alerta').style.display = 'block'; // Exibe o alerta
    } else {
        document.getElementById('alerta').style.display = 'none'; // Esconde o alerta
    }
}