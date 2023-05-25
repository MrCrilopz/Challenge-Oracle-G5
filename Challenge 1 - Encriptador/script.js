var diccionarioEncriptar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  
  var diccionarioDesencriptar = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"]
  ];
  
  function encriptarTexto() {
    var textoEntrada = document.getElementById('inputText').value.toLowerCase();
    var textoSalida = encriptar(textoEntrada);
    
    document.getElementById('outputText').value = textoSalida;
  }
  
  function desencriptarTexto() {
    var textoEntrada = document.getElementById('inputText').value.toLowerCase();
    var textoSalida = desencriptar(textoEntrada);
    
    document.getElementById('outputText').value = textoSalida;
  }
  
  function encriptar(texto) {
    var textoEncriptado = texto;
    
    for (var i = 0; i < diccionarioEncriptar.length; i++) {
      var letra = diccionarioEncriptar[i][0];
      var equivalencia = diccionarioEncriptar[i][1];
      textoEncriptado = textoEncriptado.replace(new RegExp(letra, 'g'), equivalencia);
    }
    
    return textoEncriptado;
  }
  
  function desencriptar(texto) {
    var textoDesencriptado = texto;
    
    for (var i = 0; i < diccionarioDesencriptar.length; i++) {
      var letra = diccionarioDesencriptar[i][0];
      var equivalencia = diccionarioDesencriptar[i][1];
      textoDesencriptado = textoDesencriptado.replace(new RegExp(letra, 'g'), equivalencia);
    }
    
    return textoDesencriptado;
  }
  
  function copiarAlPortapapeles() {
    var textoSalida = document.getElementById('outputText');
    textoSalida.select();
    document.execCommand('copy');
  }
  