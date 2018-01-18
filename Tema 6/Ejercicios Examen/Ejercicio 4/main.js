//EJERCICIO 4
//Crea mediante JavaScript una página que contenga 100 cajas (div) que tengan
//las siguientes propiedades css: tamaño 40x40 borde 1pixel negro alineado a la
//izquierda (float), el contenido de cada caja será su número (1 al 100). Tras esto se
//pedirá un número del 1 al 10 (mediante un prompt hasta que el número sea
//correcto) y coloreará de rojo las cajas que sean múltiplos de ese número.

$(document).ready(function(){
    
    for(var i = 1; i <= 100; i++){
        var caja = $("<div>" + i + "</div>");
        caja.addClass("caja");
        
        $("body").append(caja);
    }
    
    var numero;
    
    do{
        numero = prompt("Introduce un número del 1 al 10");
    }while(numero < 1 || numero > 10);
        
    var cajas = $("div.caja");
    for(var i = 0; i <= cajas.length; i++){
        if(cajas.eq(i).text() % numero == 0){
           cajas.eq(i).css("background-color", "red");
        }
    }
    
});