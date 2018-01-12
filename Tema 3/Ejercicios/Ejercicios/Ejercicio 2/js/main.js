var numeros = prompt("Introduce 5 números separados por espacio");



function orden(a, b){
    return a-b;
}

var resultado = numeros.split(" ");
resultado.sort(orden);
for(var i = 0; i < resultado.length; i++){
    document.write(resultado[i] + " ");
}