//EJERCICIO 15
//Partiendo del ejercicio 12 hacer que cada una de las celdas de la tabla tenga un
//color RGB aleatorio en el momento de crearse.

$(document).ready(function () {


    $("body").append("<table id=tabla>");
    for (var i = 0; i < 20; i++) {
        $("#tabla").append("<tr id=" + i + ">");

        for (var j = 0; j < 20; j++) {
            $("tr#" + i).append("<td></td>");
        }

        $("#tabla").append("</tr>");
    }
    $("body").append("</table>");

    var celdas = $("td");
    
    for(var i = 0; i <= celdas.length; i++){
        var red = Math.floor(Math.random() * (255 - 0));
        var green = Math.floor(Math.random() * (255 - 0));
        var blue = Math.floor(Math.random() * (255 - 0));
        console.log("rgb(" + red + ", " + green + ", " + blue + ")")
        
        celdas.eq(i).css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
    }

});
