$.validator.addMethod("dni", dni, "El dni no es correcto")

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
                minlength: 4,
                maxlength: 20
            },
            apellidos: {
                required: true,
                minlength: 10,
                maxlength: 30
            },
            nacimiento: {
                required: false
            },
            correo1: {
                required: true
            },
            correo2: {
                required: true,
                equalTo: "#correo1"
            },
            clave: {
                required: true,
                minlength: 5
            },
            repite: {
                required: true,
                minlength: 5,
                equalTo: "#clave"
            },
            dni: {
                required: true,
                dni: true
            },
            blog: {
                required: false,
                url: true
            },
            foto: {
                imagen: true
            }

        },
        messages: {
            nombre: {
                required: obligatorio,
                minlength: longitud(4, "min"),
                maxlength: longitud(20, "max")
            },
            apellidos: {
                required: obligatorio,
                minlength: longitud(10, "min"),
                maxlength: longitud(30, "max")
            },
            correo1: {
                required: obligatorio
            },
            correo2: {
                required: obligatorio,
                equalTo: igual
            },
            clave: {
                required: obligatorio,
                minlength: longitud(5, "min")
            },
            repite: {
                required: obligatorio,
                minlength: longitud(5, "min"),
                equalTo: igual
            },
            dni: {
                required: obligatorio
            },
            blog: {
                url: "Introduce una url correcta"
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

function dni(valor, elemento) {
    var DNI = /^\d{8}[a-zA-Z]{1}$/;
    var numero = valor.substr(0, valor.length - 1);
    var letra = valor.substr(valor.length - 1, 1);
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    console.log(numero);
    console.log(letra);
    numero = numero % 23;
    letras = letras.substring(numero, numero + 1);

    if (valor.match(DNI)) {
        if (letras != letra.toUpperCase()) {
            return false;
        } else {
            return true;
        }
    } else {
        return valor.match(DNI);
    }
}

function imagen(valor, elemento) {
    var imageRegex = /([^\s]+(?=\(jpg|gif|png))\.\2)/;

    return valor.match(imageRegex);

}