var numero=prompt("Introduce un numero entre -99 y 99");

if(parseInt(numero / 10) == 0)
{
    
    alert("El numero tiene un digito");
}else if(parseInt(numero / 100) == 0){
    alert("El numero tiene dos digitos");

}else{
	
    alert("Error no esta en el rango");
}