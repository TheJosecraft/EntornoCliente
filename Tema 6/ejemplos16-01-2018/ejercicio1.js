$(document).ready(Inicio);

function Inicio()
{
	/*SOL1
	var parrafo1=$("#primero");
	var parrafo2=$("#segundo");
    
    var texto_2=parrafo2.text();
    parrafo2.text(parrafo1.text());
    parrafo1.text(texto_2);*/


    /*SOL2
    var parrafo1=$("#primero").detach();
    var parrafo2=$("#segundo");  
    parrafo2.after(parrafo1); 
    */

    //SOL3
    /*var parrafo1=$("#primero").clone();
    var parrafo2=$("#segundo");  
    $("#primero").remove();
    parrafo2.after(parrafo1);   
*/
    //SOL4
/*  var parrafo1=$("#primero");  
    var parrafo2=$("#segundo").clone();
    $("#segundo").remove();
    parrafo1.before(parrafo2);   
*/

    
   /* var parrafo1=$("p").first();
    var parrafo2=$("p").eq(1);
   */
    
   var parrafo1=$("p").first();
   var parrafo2=parrafo1.next();








}