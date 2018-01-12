window.addEventListener("load",Inicio);

function Inicio()
{
	document.body.addEventListener("keypress",Teclado);

	var divInfo=document.querySelector("#info");
	divInfo.addEventListener("mouseover",Raton);
}

function Teclado(evento)
{
	var divInfo=document.querySelector("#info");

	divInfo.style.backgroundColor="cyan";
	divInfo.innerHTML="<h1>Teclado</h1><h2>"+evento.keyCode+"</h2>"
	                 +"<h2>"+String.fromCharCode(evento.keyCode)+"</h2>";

}

function Raton(evento) {
    this.style.backgroundColor="lightyellow";
    this.innerHTML="<h1>Raton</h1><h2>[ "+evento.clientX+" , "+evento.clientY+" ]";

}