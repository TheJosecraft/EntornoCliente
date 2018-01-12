var dia = prompt("Introduce un día");
var mes = prompt("Introduce un mes");
var ano = prompt("Introduce un año");

var diaHoy = 20;
var mesHoy = 9;
var anoHoy = 2017;

var checkDia;
var checkMes;
var checkAno;

checkDia = dia > diaHoy;
checkMes = mes > mesHoy || mes == mesHoy;
checkAno = ano > anoHoy || ano == anoHoy;

var respuesta;

respuesta = checkDia && checkMes && checkAno;

alert("¿La fecha es posterior a la actual? " + respuesta);