var respuesta;
var numero;
var i = 1;
var lista = [];

do{
    numero = parseInt(prompt("Introduzca un número"));
    if(numero % 2 == 0){
        lista[i] = numero;
        i++;
    }
    respuesta = confirm("¿Desea cotinuar?");
}while(respuesta != false)

document.write(lista);