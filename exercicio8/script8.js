//função que vai verificar a estação do ano
function verificarEstacao() {
    //entrada de dados do usuário
    let mes = window.prompt("Digite o nome de um mês do ano:");

    //transforma todas as letras em maiúsculas
    mes = mes.toUpperCase();

    //declara uma variável para armazenar a estação
    let estacao = "";

    //verifica qual estação o mês pertence
    if (mes == "DEZEMBRO" || mes == "JANEIRO" || mes == "FEVEREIRO") {
        estacao = "Verão";
        document.body.style.backgroundColor = "#FFD700"; // amarelo dourado
    } else if (mes == "MARÇO" || mes == "ABRIL" || mes == "MAIO") {
        estacao = "Outono";
        document.body.style.backgroundColor = "#FF8C00"; // laranja escuro
    } else if (mes == "JUNHO" || mes == "JULHO" || mes == "AGOSTO") {
        estacao = "Inverno";
        document.body.style.backgroundColor = "#87CEFA"; // azul claro
    } else if (mes == "SETEMBRO" || mes == "OUTUBRO" || mes == "NOVEMBRO") {
        estacao = "Primavera";
        document.body.style.backgroundColor = "#98FB98"; // verde claro
    } else {
        alert("Mês inválido. Tente novamente.");
        return;
    }

    //mostra o resultado pro usuário
    alert(`O mês de ${mes} pertence à estação: ${estacao}`);
    document.getElementById("resultado").innerHTML = `<p>O mês de ${mes} pertence à estação: ${estacao}</p>`;

}
