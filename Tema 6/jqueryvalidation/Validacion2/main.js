$.validator.addMethod("dni", dni, "El dni no es correcto");
$.validator.addMethod("nombre", nombre, "El nombre no es correcto");
$.validator.addMethod("direccion", direccion, "La dirección no es correcta");
$.validator.addMethod("puerta", puerta, "La puerta sólo puede contener una letra");
$.validator.addMethod("cp", cp, "El código postal no es correcto");
$.validator.addMethod("tel1", tel1, "El teléfono no es correcto");
$.validator.addMethod("tel2", tel2, "El teléfono no es correcto");
$.validator.addMethod("cupon", cupon, "El cupón no es correcto");

$.validator.addMethod("imagen", imagen, "La imagen que ha introducido no es correcta");

$(document).ready(function() {

    var obligatorio = "Este campo es obligatorio";
    var igual = "Los campos no coinciden";


    $("form").validate({
        success: "verde",
        errorClass: "rojo",
        rules: {
            nombre: {
                required: true,
                nombre: true
            },
            apellidos: {
                required: true,
                minlength: 10,
                maxlength: 30
            },
            direccion: {
                required: true,
                direccion: true
            },
            numero: {
                required: true,
                range: [1, 100]
            },
            puerta: {
                puerta: true
            },
            cp: {
                required: true,
                cp: true
            },
            tel1: {
                required: true,
                tel1: true,
                digits: true,
                minlength: 9,
                maxlength: 9
            },
            tel2: {
                tel2: true,
                digits: true,
                minlength: 9,
                maxlength: 9
            },
            correo: {
                required: true,
                email: true
            },
            tarjeta: {
                required: true,
                creditcard: true
            },
            financiar: {
                required: true,
                range: [1, 100]
            },
            cupon: {
                cupon: true
            },
            producto: {
                required: true,
                minlength: 3
            }

        },
        messages: {
            nombre: {
                required: obligatorio

            },
            apellidos: {
                required: obligatorio
            },
            direccion: {
                required: obligatorio,
                direccion: true
            },
            numero: {
                required: obligatorio,
                range: "El número tiene que estar entre 1 y 100"
            },
            cp: {
                required: obligatorio,
            },
            tel1: {
                required: obligatorio,
                digits: true,
                minlength: 9,
                maxlength: 9
            },
            tel2: {
                digits: true,
                minlength: 9,
                maxlength: 9
            },
            correo: {
                required: obligatorio,
                email: "Lo que ha introducido no es un correo válido"
            },
            tarjeta: {
                required: obligatorio
            },
            financiar: {
                required: obligatorio,
                range: "El número tiene que estar entre 1 y 100"
            },
            producto: {
                required: obligatorio,
                minlength: "Por favor, escoge al menos 3 productos"
            }

        }
    });

});

function longitud(numero, extremo) {
    if (extremo == "min") {
        return "Por favor, introduce al menos " + numero + " caracteres";
    } else if (extremo == "max") {
        return "Por favor, introduce menos de " + numero + " caracteres";

    }
}

function nombre(valor, elemento) {
    var nombre = /^\D{4,20}$/;
    if (valor.match(nombre)) {
        return true;
    } else {
        return false;
    }
}

function direccion(valor, elemento) {
    var direccion = /^[a-zA-Z\s]*$/;
    if (valor.match(direccion)) {
        return true;
    } else {
        return false;
    }
}

function puerta(valor, elemento) {
    var puerta = /^[a-zA-Z]$/;
    if (valor.match(puerta)) {
        return true;
    } else {
        return false;
    }
}

function cp(valor, elemento) {
    var cp = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
    if (valor.match(cp)) {
        return true;
    } else {
        return false;
    }
}

function tel1(valor, elemento) {
    var tel1 = /^[6|9]+[0-9]{8}$/;
    if (valor.match(tel1)) {
        return true;
    } else {
        return false;
    }
}

function tel2(valor, elemento) {
    var tel2 = /^[6|9]+[0-9]{8}$/;
    if (valor != "") {
        if (valor.match(tel2)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }

}

function cupon(valor, elemento) {
    var cupon = /^[A-Z0-9]{5}$/;
    if (valor.match(cupon)) {
        return true;
    } else {
        return false;
    }
}