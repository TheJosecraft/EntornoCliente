window.addEventListener("load",Inicio);
function Inicio()
{
     var parrafos=document.querySelectorAll("p");
     for(var i=0;i<parrafos.length;i++)
     {
       parrafos[i].addEventListener("click",Borrar);	
     }     
}

function Borrar()
{
	this.style.display="none";
}


