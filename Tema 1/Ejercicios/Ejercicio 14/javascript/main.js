var dia = prompt("Introduce un día");
var mes = prompt("Introduce un mes");
var ano = prompt("Introduce un año");

var checkDia = dia == 25;
var checkMes = mes == 12

var respuesta;

respuesta = checkDia && checkMes;

alert("Es el día de Navidad? " + respuesta);