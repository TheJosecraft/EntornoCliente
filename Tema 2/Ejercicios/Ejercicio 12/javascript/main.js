var nota = 0;
var suma = 0;
for(i = 1; i <= 5; i++){
    nota = parseFloat(prompt("Introduce la nota " + i));
    suma = suma + nota;
}

suma = suma / 5;

document.write("Tu nota es: " + suma)
