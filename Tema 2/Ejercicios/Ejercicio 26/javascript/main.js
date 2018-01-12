document.write("<ol>");
do {
    
    var dato = prompt("Introduce un dato");
    
    document.write("<li>" + dato + "</li>");
    
    var continuar = confirm("¿Desea continuar?");
    
    
} while(continuar != false)
    
document.write("</ol>")