$(document).ready(Inicio_Ajax);


function Inicio_Ajax()
{
     $(document).ajaxStart(
               function()
               {
                    $("#cargando").show();
                    
               }
      );
      $(document).ajaxStop(
               function()
               {
                   $("#cargando").hide();
               }
      );

      $("input[type=submit]").click(Horoscopo);
}

function Horoscopo(evento)
{
   evento.preventDefault();
   var entrada={};
   entrada["dia"]=$("#dia").val();
   entrada["mes"]=$("#mes").val();
   $.post("horoscopo.php",entrada,AjaxPost);


}

function AjaxPost(datos)
{
   var objeto=JSON.parse(datos);

   if(objeto["estado"])
   {
       $("#info").html("<h1>"+objeto["signo"]+"</h1><p>"+objeto["texto"]+"</p>");
   }
}