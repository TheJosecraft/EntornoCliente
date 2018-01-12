function Inicio() {
//EJERCICIO 1
//Crea un script que realice los siguientes cambios sobre el fichero página.html:
// Cambia todo el texto dentro de las capas con clase artículo a verde.
// Fija a 16px el tamaño de los enlaces de la capa noticias.
// Cambia el texto de los enlaces que estén en las capas publicidad, articulo y
//secundario a “leer más…”
    
    var articulos = document.querySelectorAll(".articulo");
    
    for(i = 0; i < articulos.length; i++){
        articulos[i].style.color = "green";
    }
    
    var noticias = document.querySelectorAll("#noticias a");
    
    for(i = 0; i < noticias.length; i++){
        noticias[i].style.fontSize = "16px";
    }
    
    var enlaces = document.querySelectorAll("#publicidad a, .articulo a, #secundario a");
    
    for(i = 0; i < enlaces.length; i++){
        enlaces[i].innerHTML = "leer más...";
    }
    
}
window.onload = Inicio;
