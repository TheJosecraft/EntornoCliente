do {
    var nombre = prompt("Introduce tu nombre");
} while (nombre == "");

do {
    var telefono = prompt("Introduce tu teléfono");
} while (telefono[0] != 6 && telefono[0] != 9);

do {
    var password = prompt("Introduce una contraseña");
} while (password.length < 4 || password.length > 10);

do {
    var repeatPassword = prompt("Repite la contraseña");
} while (repeatPassword != password);

var datos = [nombre, telefono, password, repeatPassword];
var nombres = ["Nombre", "Teléfono", "Contraseña", "Repetir Contraseña"];

document.write("<ul>");
for (var i = 0; i < datos.length; i++) {
    document.write("<li>" + nombres[i] + ": " + datos[i] + "</li>");
}
document.write("</ul>");
