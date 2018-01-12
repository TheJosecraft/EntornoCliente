var ventana;
var temporizador;

function Desplazar()
{
    ventana.focus();
    ventana.moveBy(20,0);
    alert(ventana.screenLeft);
	if(ventana.screenLeft>200)
	{
       clearTimeOut(temporizador);
	}
	  
}

ventana=open("","ventana","menubar=yes");
ventana.moveTo(0,0);


temporizador=setInterval(Desplazar,1000);