var nombre = prompt("Introduce tu nombre");

var n1 = prompt("Introduce la primera nota");
var n2 = prompt("Introduce la segundda nota");
var n3 = prompt("Introduce la tercera nota");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);

var suma = n1 + n2 + n3;
var media = suma / 3;

if(media >= 6){
    alert("El alumno " + nombre + " es apto");
}else{
    alert("El alumno " + nombre + " no es apto");
}