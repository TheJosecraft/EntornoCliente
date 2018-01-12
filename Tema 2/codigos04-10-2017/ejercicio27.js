var filas,columnas;


filas=prompt("Numero de filas para la tabla");
columnas=prompt("Numero de columnas para la tabla");

document.write("<table border='1'>");
for(var i=0;i<filas;i++)
{
   document.write("<tr bgcolor='red'>");
   for(var j=0;j<columnas;j++)
   {
      document.write("<td>Celda</td>");
   }
   document.write("</tr>");
}
document.write("</table>");

