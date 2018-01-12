/*EJERCICIO 31
Crea una aplicación que permita crear formularios personalizados. Antes de crear
el formulario, se preguntará al usuario a donde se desea enviar los datos (atributo
action), el número de campos y los nombres de dichos campos. Después se creará
el formulario como ocurre en el siguiente: */

var enviar = prompt("¿Dónde deseas enviar los datos?");
var ncam = prompt("¿Cuántos campos va a tener el formulario?");
var nomcam = [];

for(var i = 1; i <= ncam; i++){
    nomcam[i - 1] = prompt("Introduce el nombre del campo " + i);
}

document.write("<form method='post' action=" + enviar + ">");

for(var i = 0; i <= nomcam.length - 1; i++){
    document.write("<label for=" + nomcam[i] + ">" + nomcam[i] + "</label></br>");
    document.write("<input type='text' id=" + nomcam[i] + " placeholder=" + nomcam[i] + " required></input><br><br>");
}

document.write("<br><input type='submit'></input>");
document.write("</form>");

