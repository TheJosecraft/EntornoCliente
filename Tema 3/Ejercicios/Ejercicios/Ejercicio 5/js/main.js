var fechaPost = new Date();
var fechaAnt = new Date();
var fecha = new Date();

fechaAnt.setDate(fechaAnt.getDate() - 1);
fechaPost.setDate(fechaPost.getDate() + 1);

document.write("Fecha actual:<br>");
document.write(fecha.getDate() + "/" + (fecha.getMonth() + 1) + "" + "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + "<br>");

document.write("Fecha anterior:<br>");
document.write(fechaAnt.getDate() + "/" + (fechaAnt.getMonth() + 1) + "" + "/" + fechaAnt.getFullYear() + " " + fechaAnt.getHours() + ":" + fechaAnt.getMinutes() + ":" + fechaAnt.getSeconds() + "<br>");

document.write("Fecha posterior:<br>");
document.write(fechaPost.getDate() + "/" + (fechaPost.getMonth() + 1) + "" + "/" + fechaPost.getFullYear() + " " + fechaPost.getHours() + ":" + fechaPost.getMinutes() + ":" + fechaPost.getSeconds() + "<br>");
