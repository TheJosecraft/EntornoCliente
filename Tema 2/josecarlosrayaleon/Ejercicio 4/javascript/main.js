var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var resto;

do {
    var dni = prompt("Introduce tu DNI sin la letra");
} while (dni.length != 8);
var letra = prompt("Introduce la letra del DNI en mayúculas");

resto = dni % 23;

if (letras[resto] == letra) {
    alert("Es correcto");
} else {
    alert("No es correcto");
}
