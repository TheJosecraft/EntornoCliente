var numero = prompt("Introduce un número entre -99 y 99");

if(numero > -10 && numero < 10){
    alert("El número tiene un dígito");
}else if(numero >= -99 && numero <= 99){
    alert("El número tiene dos dígitos");
}else{
    alert("El número no está entre -99 y 99");
}