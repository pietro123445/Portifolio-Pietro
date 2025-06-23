//função que vai somar os valores
function verificarIdade(){
    //declaração de variaveis
    let anoNascimento = 0;
    let anoAtual = 0;

    //entrada de dados pelo usuario
    anoNascimento = Number(window.prompt('Digite o ano que você nasceu:'));
    anoAtual = Number(window.prompt('Digite o ano atual:'));

    //a variavel de dados recebe o resultado da soma das variaveis anoNascimento e anoAtual
    idade = anoAtual - anoNascimento;

    //mostra o resultado pro usuario
    alert("Você tem " + idade + " anos");

    //verifica se o resultado da soma é maior ou menor que 18
    if(idade >= 18){
        //caso seja maior que 18, mostra a frase abaixo pro usuario
        alert("Você está permitido a tirar a carteira de motorista");
    } else {
        //se for menor que 18 mostra quantos anos faltam para fazer 18 anos
        let dif = 18 - idade;
        alert("Você não tem 18 anos. Faltam " + dif + " ano(s) para você poder tirar sua carteira");
    }
}