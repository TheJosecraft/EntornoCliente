var precio = prompt("Introduce el precio del artículo");
var cantidad = prompt("Introduce la cantidad");

precio = parseFloat(precio);
cantidad = parseInt(cantidad);

var total = precio * cantidad;

document.write("Precio del artículo: " + precio + "€<br>" + 
              "Cantidad de artículos: " + cantidad + "<br>" + 
              "Total a pagar: " + total + "€");