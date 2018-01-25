//Elaborar un script que haga los siguiente:
// Dibujar una tabla de 20x20 con 1px de borde y fondo inicial blanco.
// Cuando se haga clic sobre alguna celda cambiar el color a rojo.
// Cuando se haga clic sobre alguna celda de color rojo cambiar el color a
//amarillo.
// Cuando se haga clic sobre alguna celda de color amarillo volverá al color
//inicial del fondo, o sea el color blanco.
// El aspecto de la tabla debe ser parecido a la siguiente captura.

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

    $("#tabla tr td").click(Color);

    function Color() {

        if ($(this).hasClass("")) {
            $(this).addClass("rojo")
        } else if ($(this).hasClass("rojo")) {
            $(this).removeClass("rojo").addClass("amarillo");
        }else{
            $(this).removeClass("amarillo");
        }
    }

});
