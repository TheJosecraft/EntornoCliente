var nota = 0;
var suma = 0;
var notas = [];
var i = 1;
var respuesta;
var media = 0;
var max = 0;
var min = 0;

do {
    nota = parseInt(prompt("Introduce una nota"));
    notas[i] = nota;
    i++;
    respuesta = confirm("¿Desea continuar?");
} while (respuesta != false)

for (var x = 1; x <= notas.length - 1; x++) {
    suma = suma + notas[x];
    if (notas[x] > max) {
        max = notas[x];
    }

    if (min > notas[x]) {
        min = notas[x];
    }
}

media = suma / notas.length - 1;

document.write("Tu media es: " + media + "<br>");

document.write("La nota máxima es: " + max + "<br>");

document.write("La nota mínima es: " + min + "<br>");
