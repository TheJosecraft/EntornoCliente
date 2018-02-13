$(document).ready(Inicio);

var empiezaletra = /^[a-zA-Z][a-z0-9_-]*$/;
var CIF = /^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/;
var codigo_postal = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
var VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
var MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
var DNI = /^\d{8}[a-zA-Z]{1}$/;
var imageRegex = /([^\s]+(?=\.(jpg|gif|png))\.\2)/;


function EsValido(form) {
    alert("Es valido siga adelante");
    form.submit();
}

$.validator.addMethod("letra", EmpiezaPorLetra, "Error de empezar por numero");

function EmpiezaPorLetra(valor, elemento) {
    var empiezaletra = /^[a-zA-Z][a-z0-9_-]*$/;
    return this.optional(elemento) || valor.match(empiezaletra);
}


function Inicio() {
    $("#registro").validate({
        submitHandler: EsValido,
        success: "verde",
        errorClass: "rojo",
        rules: {
            nombre: {
                required: true,
                letra: true
            },
            apellidos: "required",
            password: {
                required: true,
                minlength: 5
            },
            re_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            tema: {
                required: true,
                minlength: 2
            },
            deacuerdo: "required"
        },
        messages: {
            nombre: {
                required: "El nombre es obligatorio",
                letra: "No puede empezar por numero"
            },
            apellidos: "El apellidos es obligatorio",
            password: {
                required: "El password es obligatorio",
                minlength: "Tiene que ser minimo 5 caracteres"
            },
            re_password: {
                required: "El password es obligatorio",
                minlength: "Tiene que ser minimo 5 caracteres",
                equalTo: "Tienen que coincidir los password"
            },
            tema: {
                required: "Tienes que elegir algun tema",
                minlength: "Debes elegir al menos 2 temas"
            },
            deacuerdo: "Tienes que estar de acuerdo con las condiciones"
        }
    });



}