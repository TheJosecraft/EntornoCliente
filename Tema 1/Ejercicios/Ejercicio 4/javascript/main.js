var n1 = prompt("Introduce el primer número");
var n2 = prompt("Introduce el segundo número");
var n3 = prompt("Introduce el tercer número");
var n4 = prompt("Introduce el cuarto número");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);

var media = (n1 + n2 + n3 + n4) / 4;
alert("El valor medio de los números introducidos es: " + media);