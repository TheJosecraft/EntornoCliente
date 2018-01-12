var dato;
var continuar;
var elementos="";

//document.write("<ol>");
do
{
    dato=prompt("Introduzca datos");
    elementos+="<li>"+dato+"</li>";
   // document.write("<li>"+dato+"</li>");
    continuar=confirm("¿Desea continuar?");
}while(continuar==true);

document.write("<ol>"+elementos+"</ol>");

//document.write("</ol>");