var ventana;

function Desplazar(){
    var aleatorio1 = Math.floor(Math.random() * 1920 ) + 1
    var aleatorio2 = Math.floor(Math.random() * 1080 ) + 1
    ventana.focus();
    ventana.moveTo(aleatorio1, aleatorio2);
}

ventana = open("", "ventana", "menubar=yes");
ventana.moveTo(0,0);

setInterval(Desplazar, 1000);