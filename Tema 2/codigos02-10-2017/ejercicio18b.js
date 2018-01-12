var cadena1="Hola";
var cadena2="hola";
var cadena3="HOLA";

alert(TipoCase(cadena3));

function Minus(letra)
{
  return letra>='a' && letra<='z';
}

function Mayus(letra)
{
  return letra>='A' && letra<='Z';
}


function TipoCase(cad)
{
    var minus=false;
    var mayus=false;

    for(var i=0;i<cad.length;i++)
    {
       if(Minus(cad[i]))
       {
          minus=true;
       }

       if(Mayus(cad[i]))
       {
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



