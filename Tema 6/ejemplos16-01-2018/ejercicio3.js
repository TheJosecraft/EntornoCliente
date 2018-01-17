$(document).ready(Inicio);

function Inicio()
{
   //var boton=$("input").last();

   //var boton=$("input").first().nextUntil("input");

   var boton=$("input[type=button]");
   boton.click(Insertar);

   $("#lista li").dblclick(Eliminar);
   
   
}

function Insertar()
{
	var datos=$("#datos").val();
  var posicion=$("#posicion").val();
  var lista=$("#lista");
  
  var nueva=$("<li>"+datos+"</li>");
  nueva.dblclick(Eliminar);
  

  var elementos=lista.children();
  if(elementos.length==0)
  {
    lista.append(nueva);
  }else if(posicion>0 && posicion<=elementos.length){
    elementos.eq(posicion-1).before(nueva);
  }else{
    alert("No puede insertar fuera de la lista");
  }
}

function Eliminar()
{
    $(this).remove();
     
}



