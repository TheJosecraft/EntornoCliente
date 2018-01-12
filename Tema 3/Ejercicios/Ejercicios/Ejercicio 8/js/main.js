function mostrarVentana(){
    var ventana = open("", "ventana", "menubar=yes");
    ventana.document.write("Anuncio de publicidad");
    ventana.document.write("<img src=''>");
    ventana.focus();
}

function cerrarVentana(){
    ventana.close;
}

setTimeout(mostrarVentana, 5000);
setTimeout(cerrarVentana, 8000);