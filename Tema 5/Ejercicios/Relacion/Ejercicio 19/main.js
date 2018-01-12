/*
Crear un div que cuando el ratón este encima de él sea de fondo color amarillo y
cuando se pulse una tecla sea de color azul. También debe mostrar un texto
dentro del div indicando el tipo de evento, ratón o teclado (tecla pulsada y
caracter).*/

function Inicio(){
    var div = document.querySelector("div");
    
    div.addEventListener("mouseenter", Encima);
    
    div.addEventListener("mouseleave", Fuera);
    
    window.addEventListener("keypress", Tecla);
    
    function Encima(event){
        this.style.backgroundColor = "yellow";
        this.innerHTML = "Evento: ratón";
    }
    
    function Fuera(event){
        this.style.backgroundColor = "";
        this.innerHTML = "Evento: ratón";
    }
    
    function Tecla(event){
        var div = document.querySelector("div");
        div.style.backgroundColor = "cyan";
        div.innerHTML = "Evento: teclado <br>Tecla pulsada: " + event.keyCode + "<br> Carácter correspondiente: " + String.fromCharCode(event.keyCode);
    }
}

window.addEventListener("load", Inicio);