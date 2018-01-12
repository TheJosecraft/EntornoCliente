var tipo=prompt("¿Que tipo de lista desea?(ordenada o no ordenada)");

var dias="<li>Lunes</li><li>Martes</li><li>Miercoles</li><li>Jueves</li><li>Sabado</li><li>Domingo</li>";

if(tipo=="ordenada")
{
    document.write("<ol>"+dias+"</ol>");
}else if(tipo=="no ordenada"){
    document.write("<ul>"+dias+"</ul>");
}else{
	alert("No es un tipo conocido de lista");
}