var i=0;
var respuesta;
var numero;
var lista=[];
do
{
	numero=parseInt(prompt("Introduzca un numero"));
	if(numero % 2 ==0)
	{
	  lista[i]=numero;
      i++;
	}
    respuesta=confirm("¿Desea continuar?");
	
}while(respuesta!=false);

document.write(lista);


