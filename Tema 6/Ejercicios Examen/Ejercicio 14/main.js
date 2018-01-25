//EJERCICIO 14
//Realizar lo mismo del ejercicio 13 pero usando un input type color como paleta de
//colores
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
    
    function setColor(){
        /*$(this).removeClass();
        $(this).addClass(color);
        */
        color = $(".colores").val();
        $(this).css("background-color",color);
        console.log(color);
    }
    

});
