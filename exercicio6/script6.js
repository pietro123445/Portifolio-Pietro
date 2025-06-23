// Função que será chamada quando o usuário clicar no botão de inscrição
function inscrever() {
    // Recupera o valor de inscritos diretamente do elemento HTML
    let inscritos = parseInt(document.getElementById('inscritos').textContent);

    // Incrementa o número de inscritos
    inscritos++;

    // Atualiza o número de inscritos na página
    document.getElementById('inscritos').textContent = inscritos;

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