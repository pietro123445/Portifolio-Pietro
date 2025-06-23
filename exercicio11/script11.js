function contagem() {
    let mostraResultado = document.getElementById('resultado');

    mostraResultado.innerHTML = `<p><b>Contando de 10 ate 1</b></p>`;

    let contador = 10;

    while(contador >= 1) {
        let numero = contador % 2;

        if (numero == 0) {
            mostraResultado.innerHTML += `${contador} &#x1f449 `;
        }else{
            mostraResultado.innerHTML += ` <mark> ${contador} </mark> &#x1f449`;
        }
        contador-=1;
        }
        mostraResultado.innerHTML += `&#x1f3c1`;
    }