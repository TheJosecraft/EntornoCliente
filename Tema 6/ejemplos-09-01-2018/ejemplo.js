$(document).ready(Inicio);

function Inicio()
{
	//alert($("a").eq(1).attr("href"));

	$("#boton").click(InsertarEnlace);

	var fila;
    var tabla=$("<table border='1'></table>");
    var celda;
    for(var i=1;i<=10;i++)
    {
    	fila=$("<tr></tr>");
    	for(var j=1;j<=10;j++)
    	{
    	  celda=$("<td>"+i+" "+j+"</td>");
    	  fila.append(celda);
    	  celda.click(Colorear);
        }
    	tabla.append(fila);
    }
    $("body").append(tabla);


    //$("td").click(Colorear);
}

function Colorear()
{
	$(this).css("background-color","green");

}



function InsertarEnlace()
{
    var texto=$("#contenido").val();

    var enlace=$("<a href='#'>"+texto+"</a>");

    //$("body").prepend(enlace);
    //$("body").append(enlace);
    //$("body").append("<a href='#'>"+$("#contenido").val()+"</a>");
    



}