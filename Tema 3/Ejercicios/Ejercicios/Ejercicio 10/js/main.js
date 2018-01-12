var ventana;

function Desplazar(){
    ventana.focus();
    ventana.moveBy(10,0);
    ventana.resizeBy(1,1);
}

ventana = open("", "ventana", "menubar=yes");
ventana.moveTo(0,0);

setInterval(Desplazar, 24);