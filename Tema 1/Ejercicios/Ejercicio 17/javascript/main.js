var n1 = prompt("Introduce el primer número");
var n2 = prompt("Introduce el segundo número");

n1 = parseFloat(n1);
n2 = parseFloat(n2);

var suma = n1 + n2;
var resta = n1 - n2;
var multiplicacion = n1 * n2;
var division = n1 / n2;
var modulo = n1 % n2;

document.write("<strong> Primer operando: " + n1 + " Segundo Operando " + n2 + "<br> Suma: " + suma + " Resta: " + resta + "<br> Multiplicación: " + multiplicacion + " División " + division + " Módulo: " + modulo + "</strong>");