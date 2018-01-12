var cadenas=["Juan","Jose","Garcia","rojo"];

alert(Buscar(cadenas,"Garcia"));
alert(ContarMinus(cadenas));
function Buscar(array,palabra)
{
    var posicion=-1;

    for(var i=0;i<array.length;i++)
    {
        if(array[i]==palabra)
        {
        	posicion=i;
        }
    }

    return posicion;


}


function ContarMinus(array)
{
    var contador=0;

    for(var i=0;i<array.length;i++)
    {
         if(TipoCase(array[i])==1)
         {
         	contador++;
         }
    }
    return contador;
} 

function TipoCase(cad)
{
    var minus=false;
    var mayus=false;

    for(var i=0;i<cad.length;i++)
    {
       if(cad[i]>='a' && cad[i]<='z')
       {
       	 minus=true;
       }else if(cad[i]>='A' && cad[i]<='Z'){
         mayus=true;
       }
    }

    if(minus==true && mayus==true)
    {
        return 0;

    }else if(minus==true){
        return 1;
    }else{
    	return 2;
    } 
}





