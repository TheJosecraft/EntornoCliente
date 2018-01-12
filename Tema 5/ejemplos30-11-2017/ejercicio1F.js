window.addEventListener("load",Inicio);

function Inicio()
{
	var bsubmit=document.querySelector("#boton");
	bsubmit.addEventListener("click",Validar);
    var inombre=document.querySelector("#nombre");
    inombre.addEventListener("blur",Avisa);
    var iapellidos=document.querySelector("#apellidos");
    iapellidos.addEventListener("blur",Avisa);
}

function Avisa()
{
    var formu=this.parentNode;
    
    if(this.value.trim()=="")
    {
        formu.style.backgroundColor="red";
    }else{
        formu.style.backgroundColor="white";
    }


}





function Validar(e)
{
	var inombre=document.querySelector("#nombre");
	var iapellidos=document.querySelector("#apellidos");
    var formu=this.parentNode;


    if(inombre.value.trim()=="" || iapellidos.value.trim()=="")
    {
    	alert("Alguno esta vacio");
        formu.style.backgroundColor="red";
    }else{
        var div=document.querySelector("#info");
        div.innerHTML+="Nombre: "+inombre.value+"<br>";
        div.innerHTML+="Apellidos: "+iapellidos.value+"<br>";
        formu.style.backgroundColor="white";
    }

}