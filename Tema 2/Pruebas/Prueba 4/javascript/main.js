var numero = prompt("Introduzca un número");
var contador = numero;

var telefono = "638564461";

if (numero < 0 && numero > 9) {
    alert("Error");
} else {
    document.write("<table border>");
    for (var i = 0; i <= 10; i++) {
        document.write("<tr>");
        for (var j = 0; j <= 30; j++) {
            if (contador % 3 == 0) {
                document.write("<td bgcolor='green'>" + contador + "</td>");
            }else{
                document.write("<td bgcolor='white'>" + contador + "</td>");
            }

        }
    }
}

document.write(telefono[0]);
