var numero=prompt("Introduce un numero entre 1 y 99");

if(numero>0 && numero<10)
{
    alert("El numero tiene un digito");

}else if(numero>=10 && numero<=99){
    alert("El numero tiene dos digitos");

}else{
	alert("Error no esta entre 1 y 99");
	
}