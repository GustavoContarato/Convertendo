function converterMedida(){
  
  var valor = document.getElementById("valorM").value;

  var medidaIn = document.querySelector('input[name="medidaIn"]:checked').value;
  var medidaOut = document.querySelector('input[name="medidaOut"]:checked').value;

  var valorEmQuilometros=0; 
  var valorConvertido=0;


  if(medidaIn == "metro"){
    valorEmQuilometros = valor / 1000;
  }else if(medidaIn == "centimetro"){
    valorEmQuilometros = valor / 100000 ;
  }else if(medidaIn == "milimetro"){
    valorEmQuilometros = valor / 1000000;
  }else if(medidaIn == "micrometro"){
    valorEmQuilometros = valor / 1000000000;
  }else if(medidaIn == "nanometro"){
    valorEmQuilometros = valor / 1000000000000;
  }else if(medidaIn == "milha"){
    valorEmQuilometros = valor * 1.609;
  }else if(medidaIn == "jarda"){
    valorEmQuilometros = valor / 1094;
  }else if(medidaIn == "pe"){
    valorEmQuilometros = valor / 3281;
  }else if(medidaIn == "polegada"){
    valorEmQuilometros = valor / 39370;
  }else if(medidaIn == "nautica"){
    valorEmQuilometros = valor * 1.852;
  }else{//quilômetro
    valorEmQuilometros = valor;
  }
  if(medidaOut == "metro"){
    valorConvertido = valorEmQuilometros * 1000;
  }else if(medidaOut == "centimetro"){
    valorConvertido = valorEmQuilometros * 100000;
  }else if(medidaOut == "milimetro"){
    valorConvertido = valorEmQuilometros * 1000000;
  }else if(medidaOut == "micrometro"){
    valorConvertido = valorEmQuilometros * 1000000000;
  }else if(medidaOut == "nanometro"){
    valorConvertido = valorEmQuilometros * 1000000000000;
  }else if(medidaOut == "milha"){
    valorConvertido = valorEmQuilometros / 1.609;
  }else if(medidaOut == "jarda"){
    valorConvertido = valorEmQuilometros * 1094;
  }else if(medidaOut == "pe"){
    valorConvertido = valorEmQuilometros * 3281;
  }else if(medidaOut == "polegada"){
    valorConvertido = valorEmQuilometros * 39370;
  }else if(medidaOut == "nautica"){
    valorConvertido = valorEmQuilometros / 1.852;
  }else{//quilômetro
    valorConvertido = valorEmQuilometros;}



    var divResultado = document.getElementById("resultadoM");
    divResultado.innerHTML = "Valor Convertido = " + valorConvertido;
    divResultado.className = "resultado";
  }




function converterTemperatura() {
    var valor = document.getElementById("valorT").value;

    var temperaturaIn = document.querySelector('input[name="temperaturaIn"]:checked').value;
    var temperaturaOut = document.querySelector('input[name="temperaturaOut"]:checked').value;



    var valorEmCelsius=0;
    var valorConvertido=0;

    if(temperaturaIn == "fahrenheit"){
      valorEmCelsius = (valor - 32) * 0.55;
    }else if(temperaturaIn == "kelvin"){
      valorEmCelsius = valor / 1 - 273.15;
    }else{//celsius
      valorEmCelsius = valor;
    }
    if(temperaturaOut == "fahrenheit"){
      valorConvertido = valorEmCelsius * 1.8 + 32;
    }else if(temperaturaOut == "kelvin"){
      valorConvertido = valorEmCelsius * 1 + 273.15;
    }else{//celsius
      valorConvertido = valorEmCelsius;
    }


    
    var divResultado = document.getElementById("resultadoT");
    divResultado.innerHTML = "Valor Convertido = " + valorConvertido;
    divResultado.className = "resultado";
  }


  function converterVelocidade(){
    var valor = document.getElementById("valorT").value;
  
    var velocidadeIn = document.querySelector('input[name="velocidadeIn"]:checked').value;
    var velocidadeOut = document.querySelector('input[name="velocidadeOut"]:checked').value;
  
  
    var valorEmQuilometroPorHora=0;
    var valorConvertido=0;
  
    if(velocidadeIn == "ms"){
      valorEmQuilometroPorHora = valor * 3.6 / 10;
    }else if(velocidadeIn == "mih"){
      valorEmQuilometroPorHora = valor * 1.609 / 10;
    }else if(velocidadeIn == "no"){
      valorEmQuilometroPorHora = valor * 1.852 / 10;
    }else if(velocidadeIn == "fts"){
      valorEmQuilometroPorHora = valor * 1.097 / 10;
    }else{// KM/H
      valorEmQuilometroPorHora = valor;
    }
    if(velocidadeOut == "ms"){
      valorConvertido = valorEmQuilometroPorHora / 3.6;
    }else if(velocidadeOut == "mih"){
      valorConvertido = valorEmQuilometroPorHora / 1.609;
    }else if(velocidadeOut == "no"){
      valorConvertido = valorEmQuilometroPorHora / 1.852;
    }else if(velocidadeOut == "fts"){
      valorConvertido = valorEmQuilometroPorHora / 1.097;
    }else{// KM/H
      valorConvertido = valorEmQuilometroPorHora;
    }
    
  
    var divResultado = document.getElementById("resultadoV");
    divResultado.innerHTML = "Valor Convertido = " + valorConvertido;
    divResultado.className = "resultado";
    
  }