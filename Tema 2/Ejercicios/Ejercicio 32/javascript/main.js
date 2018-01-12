/*EJERCICIO 32
Partiendo de un array de cadenas de texto, se le preguntará al usuario si quiere
que se visualice en forma de lista ordenada, lista no ordenada, radiobuttons,
ckeckboxs, dentro de un select o como botones.*/

var cadenas = ["Arbol", "Casa", "Moto", "Coche"];

var opcion = prompt("Elige el tipo de formato (lista ordenada, lista no ordenada, radiobutton, ckeckbox, select o botones)");

switch (opcion) {

    case "lista ordenada":
        document.write("<ol>" + listas(cadenas) + "</ol>");

        break;

    case "lista no ordenada":
        document.write("<ul>" + listas(cadenas) + "</ul>");

        break;

    case "radiobutton":

        input(cadenas, "radio");

        break;

    case "checkbox":
        input(cadenas, "checkbox");

        break;

    case "select":
        document.write("<select>");
        for (var i = 0; i <= cadenas.length - 1; i++) {
            document.write("<option>" + cadenas[i] + "</option>");
        }
        document.write("</select>");
        break;

    case "botones":
        for (var i = 0; i <= cadenas.length - 1; i++) {
            document.write("<input type='button' value=" + cadenas[i] + "></input><br><br>");
        }
        break;
    default:
        document.write("<h1>La opción que has elegido no es válida</h1>");
}

function listas(cads) {
    var resultado="";
    for (var i = 0; i <= cads.length - 1; i++) {
        resultado += "<li>" + cads[i] + "</li>";
        
    }
    return resultado;
}

function input(cads, tipo) {
    var resultado="";
    for (var i = 0; i <= cads.length - 1; i++) {
        resultado += "<input type=" + tipo + ">" + cadas[i] + "</input><br>";
    }
}
