function converter() {
  var valorElemento = document.getElementById("valor");
  
  var valor = 
      valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  
  var valorEmReal = valorEmDolarNumerico * 5.24;
  console.log(valorEmReal);
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido
  
}