$(document).ready(Inicio);

function Inicio()
{
	$("#ifinal").click(
         function()
         {
                  var dato=$("#datos").val();
                  var elemento=$("<li>"+dato+"</li>");
                  $("#lista").append(elemento);
         } 
	);

	$("#iprincipio").click(
         function()
         {
                  var dato=$("#datos").val();
                  var elemento=$("<li>"+dato+"</li>");
                  $("#lista").prepend(elemento);
         } 
	);

    $("#reiniciar").click(
         function()
         {
                  $("#lista").empty();
         } 
	);

    
    $("#bprincipio").click(
         function()
         {
                  $("#lista").children().first().remove();
                 /* var primero=$("#lista").children().first();
                  primero.remove();*/
         } 
	);

     $("#bfinal").click(
         function()
         {
                  $("#lista").children().last().remove();
               
         } 
	 );


     $("#ipos").click(
         function()
         {

                  var dato=$("#datos").val();
                  var posicion=$("#posicion").val()-1;
                  var elemento=$("<li>"+dato+"</li>");

                  $("#lista").children().eq(posicion).before(elemento);
                 //$("#lista").children().eq(posicion).after(elemento);

         } 
         );


         $("#bpos").click(
         function()
         {

                  var posicion=$("#posicion").val()-1;
               
                  $("#lista").children().eq(posicion).remove();
                 

         } 


         $("#bnombre").click(
         function()
         {

             var dato=$("#datos").val();

             $("#lista").children().each(
             	   function(elemento,pos)
             	   {

             	   }
             	);

         } 
	);











}