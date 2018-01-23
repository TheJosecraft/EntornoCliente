//Partiendo del ejercicio 10, añadir los siguientes eventos:
// Cuando se haga doble clic en alguna casilla cambiar el valor que tiene
//dicha casilla por el contenido de un input type text que se encuentra al lado
//con un texto explicativo.
// El contenido del input tiene que ser un numero entre 100 y 300.
// En caso de que no se cumpla avisar con un alert.
// Al pulsar el botón derecho (contextmenu) sobre alguna caja cambiar el
//número a 0. Evitar que se muestre el menú contextual al pulsar el botón
//derecho.
$(document).ready(function () {

    for (var i = 16; i <= 255; i++) {

        $("body").append("<div id=caja" + i + ">" + i + "</div>");
        $("#caja" + i).click(Clic).mouseenter(Enter);

    }

    function Clic() {
        var numero = $(this).text();
        var resultado = 0;

        numero = parseInt(numero);

        resultado = numero + 5;

        if (resultado > 300) {
            alert("El resultado no puede ser mayor de 300");
        } else {
            $(this).text(numero + 5);

            console.log(numero + " + 5" + " = " + (numero + 5));
        }


    }

    function Enter() {

        var numero = $(this).text();
        var resultado = 0;

        numero = parseInt(numero);

        resultado = numero - 2;

        if (resultado < 0) {
            alert("El resultado no puede ser negativo");
        } else {
            $(this).text(numero - 2);

            console.log(numero + " - 2" + " = " + (numero - 2));
        }


    }

});
