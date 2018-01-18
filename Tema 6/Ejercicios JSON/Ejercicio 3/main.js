/*EJERCICIO 3
Mediante prompt y la función split, meter en un Array de objetos JSON los datos de
alumnos: nombre, apellidos y nota numérica. Cuando el usuario introduzca la palabra
“fin” la aplicación dejara de pedir datos. Después existirá un botón que al pulsarlo crea
una tabla mediante Jquery con el operador $ y append, en esta tabla se muestra el
nombre completo su nota y si aprueban o no (nota mayor o igual que 5).*/
//josé carlos,raya león,9

$(document).ready(function () {

    var datos;
    var lista = [];
    var fin = false;

    while (fin != true) {
        var datos = prompt();

        if (datos != "fin") {
            datos = datos.split(',');
        } else {
            fin = true;
        }

        if(datos != "fin"){
           var json_text = '{"nombre":"' + datos[0] + '","apellidos":"' + datos[1] + '","nota":"' + datos[2] + '"}';
        }
        

        var objeto_json = JSON.parse(json_text);
        lista.push(objeto_json);

        if (datos == 'fin') {
            fin = true;
        }
    }
    lista.length = lista.length - 1;

    for (var i in lista) {
        $("#alumnos").append("<tr>");
        for (var j in lista[i]) {
            $("#alumnos tbody").append("<td>" + lista[i][j] + "</td>");
        }

        var nota = "";

        if (lista[i]["nota"] >= 5) {
            nota = "Sí";
        } else {
            nota = "No";
        }
        $("#alumnos tbody").append("<td>" + nota + "</td>");

        $("#alumnos").append("</tr>");

    }

    alert(JSON.stringify(lista));

});
