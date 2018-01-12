window.addEventListener("load",Inicio);

function Inicio()
{
	var bsubmit=document.querySelector("#boton");
	bsubmit.addEventListener("click",Validar);

}

function Validar(e)
{
	var inombre=document.querySelector("#nombre");
	var iapellidos=document.querySelector("#apellidos");

    if(inombre.value.trim()=="" || iapellidos.value.trim()=="")
    {
    	alert("Alguno esta vacio");
    }else{
        var div=document.querySelector("#info");
        div.innerHTML+="Nombre: "+inombre.value+"<br>";
        div.innerHTML+="Apellidos: "+iapellidos.value+"<br>";
    }

}