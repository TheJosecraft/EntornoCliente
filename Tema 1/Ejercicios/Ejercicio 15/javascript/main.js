var ano = prompt("Introduce un año");

var bisiesto;

bisiesto = ano % 4 == 0 || ano % 100 != 0 && ano % 400 == 0 ;

alert("¿Es bisiesto? " + bisiesto);
