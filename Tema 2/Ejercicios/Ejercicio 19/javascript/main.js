var cadenas = ["Juan", "Jose", "Garcia", "rojo"];

var cad = prompt("Introduce la cadena a buscar");

alert(Buscar(cad, cadenas));

alert("La cadena con mayor longitud es: " + CadenaMayor());

alert("Hay " + ContadorMinus() + " palabras con todas sus letras en minúscula");

function Buscar(cad) {

    var pos;
    var encontrado = false;

    for (var i = 0; i <= cadenas.length; i++) {
        if (cadenas[i] == cad) {
            pos = i;
            encontrado = true;
        }
    }

    if (encontrado) {
        return "La cadena se encuentra en la posición " + pos;
    } else {
        return "No se ha encontrado la cadena";
    }
}

function ContadorMinus() {

    var contador = 0;
    var minus = false;

    for (var i = 0; i <= cadenas.length - 1; i++) {
        if (cadenas[i] >= 'a' && cadenas[i] <= 'z') {
            minus = true;
        }

        if (minus) {
            contador++;
        }
    }

    return contador;

}

function CadenaMayor() {

    var cade = cadenas[0];

    for (var i = 0; i <= cadenas.length - 1; i++) {
        if (cadenas[i].length > cade.length) {
            cade = cadenas[i];
        }
    }

    return cade;

}
