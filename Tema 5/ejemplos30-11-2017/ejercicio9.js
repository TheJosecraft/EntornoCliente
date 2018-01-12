window.addEventListener("load",Inicio);

function Inicio()
{
	var celdas=document.querySelectorAll("#tabla td");
	for(var i=0;i<celdas.length;i++)
    {
    	celdas[i].addEventListener("click",Colorear);
    }

}

function Colorear()
{
     /*if(this.style.backgroundColor=="white")
     {
     	this.style.backgroundColor="red";
     }else{
     	this.style.backgroundColor="white";
     }*/

/*   if(this.className.indexOf("rojo")!=-1)
     {
     	this.className+="blanco";
     }else{
     	this.className="rojo";
     }
*/     
     /*if(this.className=="rojo")
     {
     	this.className="blanco";
     }else{
     	this.className="rojo";
     }*/

     var fila=this.parentNode;

     if(fila.className=="rojo")
     {
     	fila.className="blanco";
     }else{
     	fila.className="rojo";
     }




}







