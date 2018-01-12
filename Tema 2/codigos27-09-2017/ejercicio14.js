var i=0;
var respuesta;
var numero;
var lista=[];
do
{
	numero=parseInt(prompt("Introduzca un numero"));
	lista[i]=numero;
    respuesta=confirm("¿Desea continuar?");
	
}while(respuesta!=false);

var media=lista[0];
var mayor=lista[0];
var menor=lista[0];

for (var i=1;i<lista.length;i++)
{
    media+=lista[i];
    if(mayor<lista[i])
    {
    	mayor=lista[i];
    }
    if(menor>lista[i])
    {
    	menor=lista[i];
    }


}
media=media/lista.length;

document.write(...)



