window.addEventListener("load",Inicio);
function Inicio()
{
     var botones=document.querySelectorAll("input[type=button]");
     for(var i=0;i<botones.length;i++)
     {
     	botones[i].addEventListener("click",Mostrar_Ocultar);
     }  
}


function Mostrar_Ocultar()
{
	var parrafo=this.nextSibling;
  if(parrafo.style.display=="none")
  {
     parrafo.style.display="block";
     this.value="Ocultar";
  }else{
     parrafo.style.display="none";	
     this.value="Mostrar";
  }
}



