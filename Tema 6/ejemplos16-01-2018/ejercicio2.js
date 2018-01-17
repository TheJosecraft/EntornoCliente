$(document).ready(Inicio);

function Inicio()
{
   //var boton=$("input").last();

   //var boton=$("input").first().nextUntil("input");

   var boton=$("input[type=button]");

   boton.click(Insertar);

   
}

function Insertar()
{
	var datos=$("#datos").val();
    var lista=$("#lista");

    var nueva=$("<li>"+datos+"</li>");

    lista.append(nueva);
    nueva.dblclick(Eliminar);
    
}

function Eliminar()
{
    $(this).remove();

}



