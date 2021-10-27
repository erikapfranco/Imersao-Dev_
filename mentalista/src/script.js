var numeroPensado = parseInt(Math.floor(Math.random() * 100) + 1)
var resetButton = document.getElementById("resetButton");
var submitButton = document.getElementById("submitButton");
var tentativas = 1;

function mostraResultado(frase) {
    document.getElementById("resultado").innerHTML = frase;
}

function Reset() {
    var mensagemInicio = "Um novo jogo começou. Tente adivinhar o número que estou pensando!";
    mostraResultado(mensagemInicio);
    resetButton.style.display = "none";
    submitButton.style.display = "inline";
    numeroPensado = Math.round(Math.random() * 10);
    tentativas = 1;
}

function Chutar() {
    var resultado;
    var numeroMaximoDeTentativas = 3;
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == numeroPensado) {
        resultado =
            "Você ACERTOU!, o número era " +
            numeroPensado +
            " Clique em JOGAR NOVAMENTE para começar um novo jogo";
        resetButton.style.display = "inline";
        submitButton.style.display = "none";
    } else if (tentativas >= numeroMaximoDeTentativas) {
        resultado =
            "Você errou e acabaram as tentativas. O número que eu estava pensando era " +
          numeroPensado +
          ". Clique em JOGAR NOVAMENTE para começar um novo jogo";
        resetButton.style.display = "inline";
        submitButton.style.display = "none";
    } else {
        if (chute < numeroPensado) {
            resultado = "Você errou! O numero é maior que o digitado";
        } else if (chute > numeroPensado) {
            resultado = "Você errou! O numero é menor que o digitado.";
        }
              }
    tentativas++;
    mostraResultado(resultado);
}
