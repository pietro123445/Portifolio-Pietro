function contar() {
    let mostraResultado = document.getElementById('resultado');

    mostraResultado.innerHTML = `<p><b>Contando de 1 ate 10</b></p>`;

    let contador = 1;

    while(contador <= 10) {
        let numero = contador % 2;

        if (numero == 0) {
            mostraResultado.innerHTML += `<mark> ${contador} </mark> &#x1f449 `;
        }else{
            mostraResultado.innerHTML += `${contador} &#x1f449`;
        }
        contador+=1;
        }
        mostraResultado.innerHTML += `&#x1f3c1`;
    }