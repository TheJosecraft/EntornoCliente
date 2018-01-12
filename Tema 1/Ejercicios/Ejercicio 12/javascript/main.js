var dia = prompt("Introduce un día");
var mes = prompt("Introduce el número de un mes");
var ano = prompt("Introduce un año");


var compruebaDia;
var compruebaMes;
var compruebaAno;
var respuesta;

compruebaDia = (dia > 0 && dia <= 31 && mes != 2) || (dia > 0 && dia <= 28 && mes == 2);
compruebaMes = mes > 0 && mes <= 12 ;
compruebaAno = ano >= 0;

respuesta = compruebaDia && compruebaMes && compruebaAno;

alert("¿Es corresta la fecha? " + respuesta);