window.addEventListener("load",Inicio);

function Inicio()
{
	var div_eventos=document.querySelector("#eventos");
	/*Manajedores distintos para cada evento.
	...*/
	div_eventos.addEventListener("mouseenter",EntrarDiv);
	div_eventos.addEventListener("mouseout",SalirDiv);
	div_eventos.addEventListener("contextmenu",DerechoDiv);

}

function DerechoDiv(event)
{
    event.preventDefault();
    var div_eventos=document.querySelector("#eventos");
    div_eventos.innerHTML="HAS PULSADO EL BOTON DERECHO";
}


function SalirDiv()
{
   var div_eventos=document.querySelector("#eventos");
   div_eventos.innerHTML="HAS SALIDO DEL DIV";
}


function EntrarDiv()
{
	var div=document.querySelector("#eventos");
	div.innerHTML="HAS ENTRADO EN EL DIV";
}
