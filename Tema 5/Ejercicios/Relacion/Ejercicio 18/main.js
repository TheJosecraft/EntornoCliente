/*Confeccionar una página que contenga un div posicionado de manera absoluta.
Luego al presionar con el mouse en cualquier parte de la pantalla mover dicho div
a la coordenada actual donde se encuentra el mouse.
*/

function Inicio(){
    
    window.addEventListener("click", Mover);
    
    function Mover(event){
        var div = document.querySelector("div");

        div.style.top = event.clientY + "px";
        div.style.left = event.clientX + "px";
        
    }
    
}

window.addEventListener("load", Inicio);