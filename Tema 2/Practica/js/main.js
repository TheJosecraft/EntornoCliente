do {
    var titulo = prompt("Introduce un título para la página");
} while (titulo == "" || titulo == null);

do {
    var imagen = prompt("Introduce una imagen mediante una URL");
} while (imagen == "" || imagen == null);

do {
    var nombre = prompt("Introduce tu nombre");
} while (nombre == "" || nombre == null);

do {
    var apellidos = prompt("Introduce tus apellidos");
} while (apellidos == "" || apellidos == null);

do {
    var edad = prompt("Introduce tu edad");
} while (edad == "" ||edad == null);

do {
    var direccion = prompt("Introduce tu dirección");
} while (direccion == "" ||direccion == null);

do{
    telefono = prompt("Introduce tu teléfono");
}while(telefono == "" || telefono == null);
do{
    var email = prompt("Introduce tu email");
}while(email == "" || email == null);

var datos = [nombre, apellidos, edad, direccion, telefono, email];
var nomDatos = ["Nombre", "Apellidos", "Edad", "Dirección", "Teléfono", "Email"];
var numTitulos = prompt("¿Cúantas titulaciones tienes?");
var titulos = [];
var experiencia = [];

document.write("<div class='main'>");
document.write("<h1 class='titulo'>" + titulo + "</h1><br>");
document.write("<center><img class='foto' src=" + imagen + "></img></center>");
document.write("<div class='datos'>");
document.write("<h2>Datos personales</h2>");
document.write("<ul>" + leerDatos(datos, true) + "</ul>");
document.write("</div>");
document.write("<div class='formacion'>");
document.write("<h2>Formación académica</h2>");
formac(numTitulos);
document.write("<ol>" + leerDatos(titulos, false) + "</ol>");
document.write("</div>");
document.write("<div style='clear:both'></div>");
document.write("<div class='experiencia'>");
exper();
document.write("<h2>Experiencia laboral</h2>");
tabla();
document.write("</div>");
document.write("<div class='formulario'>");
document.write("<h2>Formulario de contacto</h2>");
document.write("<form method='post' action='enviar.php'>");
formulario();
document.write("<label for='message'>Deja tu mensaje</label><br><textarea id='message' placeholder='Mensaje...' /required></textarea><br>");
document.write("<input type='submit'></form>");
document.write("</div>");
document.write("</div>");

function leerDatos(array, activar) {
    var resultado = "";
    if (activar) {
        for (var i = 0; i <= array.length - 1; i++) {
            if(nomDatos[i] == "Email"){
               resultado += "<li>" + nomDatos[i] + ": <a href=mailto:" + array[i] + ">" + array[i] + "</a></li>";
            }else{
               resultado += "<li>" + nomDatos[i] + ": " + array[i] + "</li>";
            }
            
        }
    } else {
        for (var i = 0; i <= array.length - 1; i++) {
            resultado += "<li>" + array[i] + "</li>";
        }
    }


    return resultado;
}

function formac(num) {
    for (var i = 1; i <= num; i++) {
        var titulo = prompt("Introduce el nombre de la titulación " + i);
        titulos[i - 1] = titulo;
    }
}

function exper() {
    var respuestaExp = confirm("¿Tienes experiencia laboral?");
    if (respuestaExp) {
        do {
            var puesto = prompt("Introduce el puesto en el que estuviste trabajando");
            experiencia[experiencia.length] = puesto;

            var lugar = prompt("Introduce el lugar");
            experiencia[experiencia.length] = lugar;

            var periodo = prompt("Introduce el periodo (2000-2017)");
            experiencia[experiencia.length] = periodo;

            var respuestaAdd = confirm("¿Desea añadir más experiencia?");
        } while (respuestaAdd)
    } else {
        var puesto = "-";
        experiencia[experiencia.length] = puesto;

        var lugar = "-";
        experiencia[experiencia.length] = lugar;

        var periodo = "-";
        experiencia[experiencia.length] = periodo;
    }

}

function tabla() {
    document.write("<table border cellspacing=0><tr class='fila1'><td>Puesto</td><td>Lugar</td><td>Período</td></tr class='filas'><tr>");
    for (var i = 0; i <= experiencia.length - 1; i++) {
        if (i % 3 == 0 && i != 0) {
            document.write("</tr>");
        }
        document.write("<td>" + experiencia[i] + "</td>");

    }
    document.write("</table>");

}
    
function formulario(){
    var numCampos = prompt("¿Cuántos campos va a tener el formulario de contacto??");
    for(var i = 1; i <= numCampos; i++){
        var nombreCampo = prompt("Introduce el nombre del campo " + i);
        var requerido = confirm("¿Quieres que el campo sea obligatorio?");
        
        if(requerido){
           document.write("<label for=" + nombreCampo + ">" + nombreCampo + "</label><br><input id=" + nombreCampo + " type='text' placeholder=" + nombreCampo + " required><br>");
        }else{
            document.write("<label for=" + nombreCampo + ">" + nombreCampo + "</label><br><input id=" + nombreCampo + " type='text' placeholder=" + nombreCampo + "><br>");
        }
    }
}
