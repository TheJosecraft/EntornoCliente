var valores = [true, 5, false, "hola", "adios", 2];

var suma=0;
var trues=0;
var max=0;

for(var i=0;i<valores.length;i++)
{
   if(typeof(valores[i])=="number")
   {
   	 suma+=valores[i];
   }

   if(typeof(valores[i])=="boolean" && valores[i]==true)
   {
   	 trues++;
   }

if(typeof(valores[i])=="string" && valores[i].length>max)
   {
   	 max=valores[i].length;
   }
   	  

}


document.write("Valores true en el array: "+trues+"<br>");
document.write("Suma numerica: "+suma);
