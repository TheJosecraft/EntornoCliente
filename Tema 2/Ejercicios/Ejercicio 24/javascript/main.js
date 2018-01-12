var mensaje = prompt("Introduce el mensaje");

do {
    var tipo = prompt("Introduce el tipo de encabezado (1 al 6)");
    if (tipo < 1 || tipo > 6) {
        alert("El tipo no es correcto");
    }
} while (tipo < 1 || tipo > 6);

document.write("<h" + tipo + ">" + mensaje + "</h" + tipo + "/>");
