var datos = ["Nombre", "Apellidos", "Email"];
var estado = ["Soltero", "Casado", "Divorciado"];
var hobby = ["Deportes", "Cine", "Viajes"];

document.write("<form method='post'>");
for (var i = 0; i < datos.length; i++) {
    document.write("<label for=" + datos[i] + ">" + datos[i] + "</label><br>");
    document.write("<input id=" + datos[i] + " type='text'></input><br>");
}

document.write("<br>");

var respuesta = prompt("Introduce select o radio");
if (respuesta == "radio") {
    for (var i = 0; i < estado.length; i++) {
        document.write("<input id=" + estado[i] + " type='radio' name='estado' value=" + estado[i] + "></input>");
        document.write("<label for=" + estado[i] + ">" + estado[i] + "</label><br>");
    }
} else if (respuesta == "select") {
    document.write("<select>")
    for (var i = 0; i < estado.length; i++) {
        document.write("<option value=" + estado[i] + ">" + estado[i] + "</option>");
    }
    document.write("</select><br>")
}


document.write("<br>");
for (var i = 0; i < hobby.length; i++) {
    document.write("<input id=" + hobby[i] + " type='checkbox' value=" + hobby[i] + "></input>");
    document.write("<label for=" + hobby[i] + ">" + hobby[i] + "</label><br>");
}
document.write("<br>");
document.write("<input type='submit'></input>");
document.write("</form>");
