var aleatorio;
var lista_aleatoria=[];

for(var i=0;i<5;i++)
{
   aleatorio=Math.floor(Math.random()*10+1);
   lista_aleatoria.push(aleatorio);
}

alert(lista_aleatoria);