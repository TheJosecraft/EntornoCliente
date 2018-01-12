window.addEventListener("load", Inicio);


function Inicio(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.addEventListener("click", Clic);
    div_eventos.addEventListener("dblclick", DoubleClic);
    div_eventos.addEventListener("contextmenu", ContextMenu);
    div_eventos.addEventListener("mouseenter", Enter);
    div_eventos.addEventListener("mouseleave", Leave);
}

function Clic(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.innerHTML = "Has hecho clic";
}

function DoubleClic(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.innerHTML = "Has hecho doble clic";
}

function ContextMenu(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.innerHTML = "Has hecho clic derecho";
}

function Enter(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.innerHTML = "Has entrado";
}

function Leave(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.innerHTML = "Has salido";
}