function sobra() {
    let num1 = Number(window.prompt("Digite o primeiro numero"));
    let num2 = Number(window.prompt("Digite o segundo numero"));

    let resultado = num1 % num2;

    if (resultado % 2 === 0) {
        alert("O resultado da sobra é " + resultado + " e é PAR.");
    } else {
        alert("O resultado da sobra é " + resultado + " e é ÍMPAR.");
    }
}

function divisão() {
    let num1 = Number(window.prompt("Digite o primeiro numero"));
    let num2 = Number(window.prompt("Digite o segundo numero"));

    let resultado = num1 / num2;

    if (resultado % 2 === 0) {
        alert("O resultado da divisão é " + resultado + " e é PAR.");
    } else {
        alert("O resultado da divisão é " + resultado + " e é ÍMPAR.");
    }
}

function adição() {
    let num1 = Number(window.prompt("Digite o primeiro numero"));
    let num2 = Number(window.prompt("Digite o segundo numero"));

    let resultado = num1 + num2;

    if (resultado % 2 === 0) {
        alert("O resultado da adição é " + resultado + " e é PAR.");
    } else {
        alert("O resultado da adição é " + resultado + " e é ÍMPAR.");
    }
}

function subtração() {
    let num1 = Number(window.prompt("Digite o primeiro numero"));
    let num2 = Number(window.prompt("Digite o segundo numero"));

    let resultado = num1 - num2;

    if (resultado % 2 === 0) {
        alert("O resultado da subtração é " + resultado + " e é PAR.");
    } else {
        alert("O resultado da subtração é " + resultado + " e é ÍMPAR.");
    }
}

function multiplicação() {
    let num1 = Number(window.prompt("Digite o primeiro numero"));
    let num2 = Number(window.prompt("Digite o segundo numero"));

    let resultado = num1 * num2;

    if (resultado % 2 === 0) {
        alert("O resultado da multiplicação é " + resultado + " e é PAR.");
    } else {
        alert("O resultado da multiplicação é " + resultado + " e é ÍMPAR.");
    }
}