var num=-78;

//Muestra el valor absoluto pero no modifica la variable num
alert(Absoluto(num));

//Modifica la variable num y despues lo muestra
num=Absoluto(num);
alert(num);


function Absoluto(numero)
{
    if(numero<0)
    {
       numero=numero*(-1);
    }
 
    return numero;
}