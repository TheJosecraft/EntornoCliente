var contador=0;
var repetidor;

function Anuncio()
{
	contador++;
	document.write("Soy un anuncio "+contador+ " veces<br>");
	if(contador==5)
	{
		clearInterval(repetidor);
	}
}


repetidor=setInterval(Anuncio,2000);