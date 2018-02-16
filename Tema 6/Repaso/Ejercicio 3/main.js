// A partir del fichero ejercicio2.html se quiere añadir mediante JavaScript nuevos
// elementos a la lista con id “lista” inicialmente vacía. Para esto se creará una
// función que se ejecute al pulsa el botón del formulario que está en dicha página y
// lo añada al final de la lista. Además, cada elemento que se añada a la lista se
// podrá borra haciendo doble clic sobre él.
// Partiendo del ejercicio anterior realizar lo mismo pero que pregunte el elemento a
// añadir al pulsar un botón. El dato se pedirá igualmente por un prompt, además
// también pedirá la posición (partiendo de 1) donde se quiere que se añada.

$(document).ready(function(){
	$("#enviar").click(Add);
});

function Add(){
	var lista = $("#lista");
	var datos = $("#datos").val();
	var posicion = $("#pos").val();
	var li = $("<li>" + datos + "</li>");
	li.dblclick(Remove);

	var elementos=lista.children();
  if(elementos.length==0)
  {
    lista.append(li);
  }else if(posicion>0 && posicion<=elementos.length){
    elementos.eq(posicion - 1).before(li);
  }else{
    alert("No puede insertar fuera de la lista");
  }
}

function Remove(){
	$(this).remove();
}