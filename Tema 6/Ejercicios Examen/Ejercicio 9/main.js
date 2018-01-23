//Hacer una página con 15 filas de 16 cajas (div) cada una. Cada caja contendrá
//inicialmente un valor entero: la primera el número 16 y la ultima el 255 (el resto
//valores intermedios) con el fondo blanco. Cada caja tendrá un id único
//empezando en 16: “caja16, caja17, caja18…”. El aspecto debe ser similar a la
//siguiente captura:
$(document).ready(function(){
    
    for(var i = 16; i <= 255; i++){
        $("body").append("<div id=caja" + i + ">" + i + "</div>");
    }
    
});