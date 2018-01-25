//EJERCICIO 13
//Partiendo de la misma tabla que se propone en el ejercicio 12 hacer que realice
//los siguiente:
// Incorporar a la izquierda de la tabla dos div uno con color rojo y otro con color
//amarillo. Estos div harán las veces de paleta de colores.
// Al hacer clic por ejemplo en el div con fondo amarillo después cuando
//pinchemos en alguna celda de la tabla se debe colorear de amarillo.
// Cuando se haga clic en el div con fondo rojo pasara lo mismo que con el
//amarillo
// El aspecto de la tabla junto con los div debe ser parecido a la siguiente
//captura.

$(document).ready(function () {
    
    var color;

    $("body").append("<table id=tabla>");
    for (var i = 0; i < 20; i++) {
        $("#tabla").append("<tr id=" + i + ">");

        for (var j = 0; j < 20; j++) {
            $("tr#" + i).append("<td></td>");
        }

        $("#tabla").append("</tr>");
    }
    $("body").append("</table>");

    $("#tabla tr td").click(setColor);
    $("body").append("<div class=colores id=rojo></div>");
    $("body").append("<div class=colores id=amarillo></div>");
    $("body").append("<div class=colores id=azul></div>");
    $("body").append("<div class=colores id=verde></div>");
    
    
    $(".colores").click(Color);

    function Color() {  
        color = $(this).css("background-color");
        
        console.log(color); 
    }
    
    function setColor(){
        /*$(this).removeClass();
        $(this).addClass(color);
        */
        $(this).css("background-color",color);
        console.log(color);
    }
    

});
