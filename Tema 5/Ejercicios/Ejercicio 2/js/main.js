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
    div_eventos.style.backgroundColor = "blue";
}

function DoubleClic(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.innerHTML = "Has hecho doble clic";
    div_eventos.style.backgroundColor = "palegreen";
}

function ContextMenu(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.innerHTML = "Has hecho clic derecho";
    div_eventos.style.backgroundColor = "pink";
}

function Enter(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.innerHTML = "Has entrado";
    div_eventos.style.backgroundColor = "grey";
}

function Leave(){
    var div_eventos = document.querySelector("#eventos");
    div_eventos.innerHTML = "Has salido";
    div_eventos.style.backgroundColor = "purple";
}