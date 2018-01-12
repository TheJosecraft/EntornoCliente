var mensaje=prompt("Introduzca un mensaje");
var tipo=prompt("Tipo de encabezado (1 al 6)");

if(tipo>=1 && tipo<=6)
{
    document.write("<h"+tipo+">"+mensaje+"</h"+tipo+">");
}else{
	alert("El tipo encabezado no es correcto");
}


//var etiqueta="input"

//cualquier etiqueta HTML escrita por el usuario
//document.write("<"+etiqueta+">contenido</"+etiqueta+">");
