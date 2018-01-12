window.addEventListener("load",Inicio);


function Inicio()
{
    var bsubmit=document.querySelector("#enviar");
    bsubmit.addEventListener("click",Validar);

}

function Validar()
{
    icheckbox=document.querySelector("#casilla");
	if(icheckbox.checked)
	{
		alert("Esta seleccionada");
	}else{
		alert("No esta seleccionada");
	}

	iselect=document.querySelector("#provincia");
    if(iselect.selectedIndex==0)
    {
       alert("No es una opcion valida");
    }else{
       alert("Has seleccionado "+ iselect.value);
    }








}