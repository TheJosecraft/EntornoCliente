$(document).ready(function () {
    var lista = []
    
    $('#mostrar').click(function () {
        
        var nombre = lista['nombre'];
        var edad = lista['edad'];
        var profesion = lista['profesion'];
        
        if (compruebaNombre() && compruebaEdad && compruebaProfesion) {
            alert("Aceptado");
        }else{
            alert("No aceptado");
        }
        
        function compruebaVacio(valor) {
            if (valor.trim() == "") {
                return false;
            } else {
                return true;
            }
        }

        function compruebaNombre() {
            if (nombre.charAt(0) == "A" && compruebaVacio(nombre)) {
                return true;
            } else {
                return false;
            }
        }

        function compruebaProfesion() {
            if (profesion == "INGENIERO" && compruebaVacio(profesion)) {
                return true;
            } else {
                return false;
            }
        }

        function compruebaEdad() {
            if (!isNaN(edad) && edad >= 21 && compruebaVacio(edad)) {
                return true;
            } else {
                return false;
            }
        }
    });

    $('#guardar').click(function () {

        var nombre = $('#nombre').val();
        var edad = $('#edad').val();
        var profesion = $('#profesion').val();

        var json_text = '{"nombre":"' + nombre + '","edad":"' + edad + '","profesion":"' + profesion + '"}';

        var objeto_json = JSON.parse(json_text);
        lista.push(objeto_json);
        alert(JSON.stringify(lista));

    });


});
