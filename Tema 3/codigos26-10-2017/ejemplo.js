


function Primero()
{
   document.write("Toca esto primero");
   setTimeout(Segundo,5000);
}

function Segundo()
{
   document.write("Toca esto segundo");
   setTimeout(Tercero,3000);
}



function Tercero()
{
   document.write("Toca esto tercero");

}

setTimeout(Primero,1000);

