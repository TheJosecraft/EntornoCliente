var texto = prompt("Introduzca un texto con solo letras");

texto = texto.toUpperCase;

for(var i = 0; i < texto.length; i++){
    if(texto[i] != " "){
        document.write(Morse(texto[i]));   
    }else{
        document.write(texto[i]);
    }
}


function Morse(letra){
    var codificacion;
    //             A     B        C      D     E      F
    var tabla = ["·-", "-···", "-·-·", "-··", "·", "··-·"];
    
    var letraA = "A";
    var posicion = letra.charCodeAt()-letraA.charCodeAt();
    
    codificacion = tabla[posicion];
    
    return codificacion;
}