//window.onload=Inicio;
window.addEventListener("load",Inicio);
function Inicio()
{
	var div_eventos=document.querySelector("div");
	div_eventos.addEventListener("click",SaludoDiv);
	div_eventos.addEventListener("mouseover",PasarPorEncima);

}


function SaludoDiv()
{
	alert('Has pinchado con el ratón');
}

function PasarPorEncima()
{
	alert('Has pasado por encima con el ratón');
}