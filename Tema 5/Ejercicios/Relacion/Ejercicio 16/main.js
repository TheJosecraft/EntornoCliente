//Disponer un div en la parte superior izquierda de la pantalla que muestre el valor
//que toma la posición vertical del scroll.

function Inicio(){
    var div = document.querySelector("div");
    
    div.innerHTML = scrollY;
    
}

window.addEventListener("scroll", Inicio);