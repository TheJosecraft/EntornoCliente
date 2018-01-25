//Hacer una página con 15 filas de 16 cajas (div) cada una. Cada caja contendrá
//inicialmente un valor entero: la primera el número 16 y la ultima el 255 (el resto
//valores intermedios) con el fondo blanco. Cada caja tendrá un id único
//empezando en 16: “caja16, caja17, caja18…”. El aspecto debe ser similar a la
//siguiente captura:
$(document).ready(function () {

    var equivalente = [];
    var intentos = 10;

    for (var i = 1; i < 20; i++) {
        var aleatorio = Math.floor(Math.random() * (50 - 1));

        $("#contenido").append("<div id=" + i + ">?</div>");

        equivalente[i] = {
            "numero": aleatorio,
            "estado": "aceptado"
        }
    }

    $("#contenido div").click(mostrar);
    $("#intentos").text("Intentos restantes: " + intentos);


    function mostrar() {

        var id = $(this).attr("id");

        if (equivalente[id]["estado"] != "denegado") {

            var entrada;
            do {
                entrada = prompt("Introduce un número del 1 al 50");
                entrada = parseInt(entrada);
            } while (entrada == "" || isNaN(entrada) || entrada > 50 || entrada < 0);

            var numero = equivalente[id]["numero"];

            entrada = parseInt(entrada);

            console.log("Has introducido: " + entrada);

            console.log("El correcto es: " + numero);

            if (entrada > numero || entrada < numero) {
                $(this).css("background-color", "rgb(255, 0, 0)");
                intentos--;
                $("#intentos").text("Intentos restantes: " + intentos);
                
                if(entrada > numero){
                   $("#rango").text("El número introducido es mayor que el correcto");
                }else{
                    $("#rango").text("El número introducido es menor que el correcto");
                }
                
                
            } else {
                $(this).css("background-color", "rgb(0, 255, 0)");
                $(this).text(numero);
                $("#rango").text("");
                equivalente[id]["estado"] = "denegado";
            }
        }
    }


    console.log(equivalente);

});
