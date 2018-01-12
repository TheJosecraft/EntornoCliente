window.addEventListener("load",Inicio);




function ValidarNombre()
{
    if(this.value.trim()=="")
    {
       this.className="error_input";
       this.nextSibling.innerHTML="No puede estar vacio";
       this.nextSibling.className="error_span";	
    }else{
       this.className=""; 
       this.nextSibling.innerHTML="Esta perfecto";
       this.nextSibling.className="ok_span";	
    }


}

function Inicio()
{
	var bsubmit=document.querySelector("#enviar");
	bsubmit.addEventListener("click",Validar);
	var inombre=document.querySelector("#nombre");
	inombre.addEventListener("blur",ValidarNombre);
}

function ValidarNombre()
{
	if(this.value.trim()=="")
	{
	   alert("El nombre no puede estar vacio");
    }

    if(this.value.length<4)
    {
      alert("El nombre es muy corto");	
    }

    if(!isNaN(this.value[0]))
    {
      alert("El nombre no puede empezar por número");		
    }



}



function Validar(info_event)
{
	var inombre=document.querySelector("#nombre");
	var iedad=document.querySelector("#edad");
	if(inombre.value.trim()=="")
	{
		alert("El nombre no puede estar vacio");
        info_event.preventDefault();
	}

	if(iedad.value.trim()=="")
	{
       alert("La edad no puede estar vacia");		
       info_event.preventDefault();
	}

	if(isNaN(iedad.value)){
	   alert("La edad tiene que ser un numero");		
       info_event.preventDefault();
	}

    





}