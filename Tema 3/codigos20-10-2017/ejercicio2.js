var numeros;
var lista


do
{
   numeros=prompt("introduzca 5 numeros separados por espacio");
   lista=numeros.split(" ");
}while(lista.length!=5);


lista.sort();

alert(lista);