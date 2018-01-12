//Disponer un div de 800x70 píxeles. Al hacer doble clic redimensionarlo a 250x250
//píxeles y si se hace doble clic nuevamente retornar al tamaño 800x70.

function Inicio(){
    
    var div = document.querySelector("div");
    
    div.addEventListener("dblclick", Redimen);
    
    function Redimen(event){
        if(this.style.width != "250px"){
            this.style.width = "250px";
            this.style.height = "250px";
        }else{
            this.style.width = "800px";
            this.style.height = "70px";
        }
        
    }
}

window.addEventListener("load", Inicio);