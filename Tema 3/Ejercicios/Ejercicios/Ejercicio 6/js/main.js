var dia = prompt("Introduce el día de la baja");
var mes = prompt("Introduce el mes de la baja");
var anio = prompt("Introduce el año de la baja");
var dias = prompt("Introduce el número de días de baja");
dias = parseInt(dias);
dia = parseInt(dia);
mes = parseInt(mes);
anio = parseInt(anio);
var fechaNueva = new Date(anio, mes, dia);

alert(fechaNueva);
baja(fechaNueva, dias);

function baja(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    
    document.write("Fecha de regreso:<br>");
    document.write(fecha.getDate() + "/" + (fecha.getMonth()) + "/" + fecha.getFullYear());
}