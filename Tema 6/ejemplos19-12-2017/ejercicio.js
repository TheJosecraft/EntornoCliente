$(document).ready(Inicio);


function Inicio()
{
   //   $("#boton").click(Saludo);
    $("input[type=button]").click(Saludo);
   
   var parrafo=$("<p align='center'>Esto es un parrafo desde Jquery</p>");
    
   $("body").append(parrafo);
   //parrafo.appendTo("body");
   $("body").prepend(parrafo);

   var lista=$("<ul id='lista'><li>Elemento inicial</li></ul>");
   $("body").append(lista);


    




   /*
     JAVASCRIPT PURO
     createElement("p");
  createTextNode("Esto es un parrafo desde Jquery");
  createAttribute()
  //Enganchar p con el texto y el atributo*/
}


function Saludo()
{
   
    var elemento=$("<li>Añadido</li>");
    $("#lista").append(elemento);
}