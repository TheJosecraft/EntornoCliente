var aleatorio;
var lista_aleatoria=[];
var contador=0;

while(contador<5)
{
    aleatorio=Math.floor(Math.random()*10+1);
    if(lista_aleatoria.indexOf(aleatorio)==-1)
    {
    	lista_aleatoria.push(aleatorio);
    	contador++;
    }
}

alert(lista_aleatoria);