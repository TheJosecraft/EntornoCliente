//Implementa mediante JavaScript que al pulsar sobre un párrafo con el texto
//Pínchame, se modifique su contenido a ¡Suéltame!, y al soltarlo vuelva a cambiar
//a Gracias.

function Inicio(){
    var parrafo = document.querySelectorAll("p");
    
    for(var i = 0; i < parrafo.length; i++){
        parrafo[i].addEventListener("click", Cambiar);
    }
    
    
    function Cambiar(){
        if(this.innerHTML == "Pínchame"){
            this.innerHTML = "¡Suéltame!";
        }else if(this.innerHTML == "¡Suéltame!"){
           this.innerHTML = "Gracias";
        }
    }
    
}

window.addEventListener("load", Inicio);