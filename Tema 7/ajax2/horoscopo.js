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

      $("p a").click(Horoscopo);
}

function Horoscopo(evento)
{
   var enlace=$(this).attr("href");
   evento.preventDefault();
   $.get(enlace, AjaxGet);
}

function AjaxGet(datos)
{
   $("#info").html(datos);

}