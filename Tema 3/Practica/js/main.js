var eleccionUsuario = prompt("Elige piedra, papel o tijera");

var eleccionMaquina;


eleccionMaquina = Math.floor(Math.random()*3);

var imagenesUsuario = ["piedraUsuario.png", "papelUsuario.png", "tijeraUsuario.png"];

var imagenesMaquina = ["piedraMaquina.png", "papelMaquina.png", "tijeraMaquina.png"];

eleccionUsuario = eleccionUsuario.toLocaleLowerCase();

switch(eleccionUsuario){
    case "piedra":
        eleccionUsuario = 0;
        break;
    
    case "papel":
        eleccionUsuario = 1;
        break;
        
    case "tijera":
        eleccionUsuario = 2;
        break;
        
    default:
        alert("Opción no válida");
       }

setTimeout(usuario, 2000);

function usuario(){
    document.write("<img src='img/" + imagenesUsuario[eleccionUsuario] + "'>");
    setTimeout(maquina, 2000);
}

function maquina(){
    document.write("<img src='img/" + imagenesMaquina[eleccionMaquina] + "'>");
    setTimeout(resultado, 2000);
}

function resultado(){
    if(eleccionUsuario == eleccionMaquina){
        document.write("<h1>Empate</h1>");    
    }else if(eleccionUsuario == 0){
        if(eleccionMaquina == 1){
            document.write("<h1>¡Has perdido!</h1>");
        }else{
            document.write("<h1>¡Has ganado!</h1>");
        }
    }else if(eleccionUsuario == 1){
        if(eleccionMaquina == 2){
            document.write("<h1>¡Has perdido!</h1>");
        }else{
            document.write("<h1>¡Has ganado!</h1>");
        }     
    }else if(eleccionUsuario == 2){
        if(eleccionMaquina == 0){
            document.write("<h1>¡Has perdido!</h1>");
        }else{
            document.write("<h1>¡Has ganado!</h1>");
        }
    }
    
    setTimeout(otra, 2000);
}

function otra(){
    var seguir = confirm("¿Quieres seguir jugando?");
    if(seguir){
        location.reload();   
    }
}

