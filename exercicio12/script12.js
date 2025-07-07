function contador() {
        let numero = document.getElementById(`resultado`);
        let contador = 1;
        let saida = "";

    numero =window.prompt("Digite um número para fazer a tabuada");
    if (isNaN(numero)) {
        saida = "<p>Por favor, digite um número válido.</p>";
    } else {
    while (contador <= 10) {
        saida += `${numero} x ${contador} = ${numero * contador}<br>`;
        contador++;
       
}
}

    resultado.innerHTML = saida;
 
    }