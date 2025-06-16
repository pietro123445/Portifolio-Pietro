function media () {
    let nota1 = Number (window.prompt("Digite a primeira nota: "));
    let nota2 = Number (window.prompt("Digite a segunda nota: "));
    let nota3 = Number (window.prompt("Digite a terceira nota: "));

    let media = (nota1 + nota2 + nota3) / 3;

    if(media >59) {
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = `<p><h2>Você ja esta na media</h2></p>`
    

    } else {
        let sobra = 59 - media
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = `<p><h2>você ainda não está na media ainda falta ${sobra}</h2></p>`
         
          }

    }