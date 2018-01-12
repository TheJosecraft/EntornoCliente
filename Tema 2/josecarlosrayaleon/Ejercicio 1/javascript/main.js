var fil = prompt("Introduce el número de filas");
var col = prompt("Introduce el número de columnas");
var num = prompt("Introduce un número positvo");
var suma;

parseInt(fil);
parseInt(col);
var color = 0;

document.write("<table border cellspacing=0>");
for (var i = 0; i < fil; i++) {
    document.write("<tr>");
    for (var j = 0; j < col; j++) {
        suma = i + j;

        if (color == 0) {
            document.write("<td bgcolor='green'>" + suma + "</td>");
            color++;
        } else if (color == 1 || color == 2) {
            document.write("<td bgcolor='red'>" + suma + "</td>");
            color++;
        }

        if (color > 2) {
            color = 0;
        }
    }
    color = 0;

    document.write("</tr>");
}
document.write("</table><br>");

document.write("<table border cellspacing=0>");

for (var i = 0; i < 10; i++) {
    document.write("<tr>");
    for (var j = 0; j < 20; j++) {
        document.write("<td>" + num + "</td>");
        num -= 2;
    }
    document.write("</tr>");
}

document.write("</table>");
num += 2;
if (num >= 0) {
    alert("Sólo contiene números positivos");
} else {
    alert("Contiene positivos y negativos");
}
