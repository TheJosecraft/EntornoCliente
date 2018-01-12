var numero;
do
{
  numero=prompt("Introduzca un numero");
}while(numero.length==0);



var contador=numero;

document.write("<table border>");
for (var i = 0; i <= 10; i++) {
   document.write("<tr>");
   for (var j = 0; j <= 30; j++) {
   	 if(contador%3==0)
   	 {
   	    document.write("<td bgcolor='green'>"+contador+"</td>");
   	 }else{
   	 	document.write("<td>"+contador+"</td>");
   	 }
	 contador++;
   }
   document.write("</tr>");	
}
document.write("</table>");
