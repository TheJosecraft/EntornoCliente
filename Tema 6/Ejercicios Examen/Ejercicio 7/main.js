$(document).ready(function () {

    $("#opciones option").click(function () {
        console.log("Borrada " + $(this).text());
        $(this).remove();
    });

    $("#borrar").click(function () {
        var posicion = $("#opciones").prop("selectedIndex");

        $("#opciones")
    });

    $("#buscar").click(function () {
        $("#opciones option").each(function (posicion, elemento) {
            var datos = $("#opcion").val();

            if (datos == $(elemento).text()) {
                $(elemento).remove();
            }
        })
    });

});
