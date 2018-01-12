var fil = prompt("Introduce un número de filas");
var col = prompt("Introduce un número de columnas");

document.write("<table border>");
for(var i = 0; i <= fil; i++){
    document.write("<tr></tr>");
    for(var j = 0; j <= col; j++){
        document.write("<td>" + i + "," + j + "</td>");
    }
}

document.write("</table>");