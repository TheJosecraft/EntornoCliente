/*function Carta(n, p){
    var numero=n; 
    var palo=p; 
    this.getNumero=function(){
        return numero;
    }
    
    this.getPalo=function(){
        return palo;
    }
    
    this.setNumero=function(nuevo){
        numero=nuevo;
    }
    
    this.setPalo=function(nuevo){
        palo=nuevo;
    }
    
    this.muestraTodo = function(){ //método que muestra los atributos
          var todo="";
          todo+="Numero: "+numero+" ";
          todo+="Palo: "+palo;
          return todo;
    }
    
    function oculto(){ //método privado
          return Math.random();
    }
}


var unaCarta=new Carta(10,"copas");
//alert(unaCarta.oculto());
alert(unaCarta.muestraTodo());
unaCarta.setPalo("bastos"); 
alert(unaCarta.getNumero()+" "+unaCarta.getPalo()); //muestra número y palo*/



function Persona(nom) {
    var nombre=nom;
    this.saluda=function(){
        return "Me llamo "+nombre+" ";
    }
}

function Alumno(nom, est, not) {
    Persona.call(this,nom);
    var estudios=est;
    var expediente=not;
    this.mostrarEx=function(){
        return "estudié "+estudios+" con "+expediente+" de expediente";
    }
}
Alumno.prototype = new Persona;
var yo=new Alumno("Juan", "Electronica", 5);
alert(yo.saluda()+yo.mostrarEx());