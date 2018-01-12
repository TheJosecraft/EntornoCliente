function Inicio() {
//Crea una función de JavaScript que al cargarse la página modifique la imagen de
//fondo de la etiqueta con id principal mediante el uso del DOM cargando
//aleatoriamente 1 fondo de entre 3 disponibles. De esta forma cada vez que se
//cargue la página aparecerá una imagen diferente. 
    var principal = document.querySelector("#principal");
    
    var aleatorio = Math.floor((Math.random() * 3) + 1);
    
    principal.style.backgroundImage = "url(" + aleatorio + ".jpg)";
    principal.style.backgroundSize = "cover";
    principal.style.backgroundRepeat = "no-repeat";
    
}
window.onload = Inicio;
