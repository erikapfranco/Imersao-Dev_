var resultado =  document.getElementById("resultado");

function calcular() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);
    var mediaEscola = parseFloat(document.getElementById("media1").value);
  var media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

  if (isNaN(media)) {
    resultado.innerHTML = 'Insira todas as notas para obter a média'
  
    if(nota1 > 10.0 || nota2 > 10.0 || nota3 > 10.0 || nota4 > 10.0)
    alert("O valor máximo de uma nota é 10.")  
    
  } else if (media < mediaEscola) {
      resultado.innerHTML = `Poxa vida, sua nota final é ${media}. Que tal se dedicar na próxima?.`;
  } else {
    resultado.innerHTML = `A sua média foi ${media} Show de bola hein! Passou direto :D`;
  }
}