var cadena1 = "Hola";
var cadena2 = "hola";
var cadena3 = "HOLA";

alert(TipoCase(cadena3));

function TipoCase(cad) {

    var minus = false;
    var mayus = false;

    for (var i = 0; i < cad.length; i++) {
        if (cad[i] >= 'a' && cad[i] <= 'z') {
            minus = true;
        } else if (cad[i] >= 'A' && cad[i] <= 'Z') {
            mayus = true;
        }
    }

    if (minus == true && mayus == true) {
        return 0;
    } else if (minus == true) {
        return 1;
    } else {
        return 2;
    }

}
