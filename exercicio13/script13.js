function somar(){

        let numeros = [];
        while (true) {
            let numero = prompt("Digite um número (0 para parar):");
            if (numero === "0") break;
            numeros.push(Number(numero));
        }
        
        if (numeros.length > 0) {
            let soma = numeros.reduce((a, b) => a + b, 0);
            let media = soma / numeros.length;
            document.getElementById('resultado').innerHTML = `Soma: ${soma} <br> Média: ${media}`;
        } else {
            document.getElementById('resultado').innerHTML = "Nenhum número foi digitado.";
        }

        }