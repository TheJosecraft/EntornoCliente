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
      
      $.get("http://www.rtve.es/api/noticias.json", AjaxGet);
}

function AjaxGet(datos)
{
   var lista_noticias=datos["page"]["items"];
   //array de noticias
  var texto="";
for(var i=0;i<lista_noticias.length;i++)
    texto+="<img src='"+lista_noticias[i]["imageSEO"]+"''>";

   $("#info").html(texto);
}