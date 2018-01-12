window.addEventListener("load",Inicio);

function Inicio()
{
	var tArea=document.querySelector("#mensaje");
    tArea.addEventListener("keyup",Comprobar);
    
    var bcontar=document.querySelector("#contar");
    bcontar.addEventListener("click",Contar);
}

function Comprobar()
{
  if(this.value.length<=60)
  {
   this.nextSibling.innerHTML="Caracteres escritos "+this.value.length;
   this.nextSibling.className="";
  }else{
   this.nextSibling.innerHTML="Te has pasado, llevas "+this.value.length;
   this.nextSibling.className="rojo";
  }
}

function Contar()
{
   var tArea=document.querySelector("#mensaje");
   if(tArea.value.length>0)
   {
      if(tArea.value.length<=60)
      {
   	     var palabras=tArea.value.split(" ");
         alert("Palabras escritas: "+palabras.length); 
      }else{
         alert("Te has pasado en el numero de caracteres");
      }
  }else{
  	 alert("Palabras escritas: 0");
  }
}




