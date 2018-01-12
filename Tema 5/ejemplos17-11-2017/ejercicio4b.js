window.addEventListener("load",Inicio);
function Inicio()
{
     /*var botones=document.querySelectorAll("input[type=button]");
     for(var i=0;i<botones.length;i++)
     {
     	botones[i].addEventListener("click",Mostrar_Ocultar1);
     }
     */
     var enlaces=document.querySelectorAll("a");
     for(var i=0;i<enlaces.length;i++)
     {
     	enlaces[i].addEventListener("click",Mostrar_Ocultar);
     }
}

function Mostrar_Ocultar(e)
{
  var href=this.href.split("#");
  href=href[1];

	var parrafo=document.querySelector("#"+href);
    if(parrafo.style.display=="none")
    {
       parrafo.style.display="block";
       this.innerHTML="Ocultar";
    }else{
       parrafo.style.display="none";	
       this.innerHTML="Mostrar";
    }
}



