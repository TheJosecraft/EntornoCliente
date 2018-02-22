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

      $("a").click(CambiarFormu);
}

function CambiarFormu(evento)
{
     evento.preventDefault();
     if($(this).attr("href")=="registro")
     {
        $("#login").slideUp();
        $("#registro").slideDown();
     }else{
        $("#login").slideDown();
        $("#registro").slideUp();
     }
}




function AjaxPost(datos)
{
  
}