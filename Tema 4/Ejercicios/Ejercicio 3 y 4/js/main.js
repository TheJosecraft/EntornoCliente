class Reserva {
    constructor(d, fe, fs, p){
        this.dni = d;
        this.fentrada = fe;
        this.fsalida = fs;
        this.personas = p;
    }
    
    get Dni(){
        return this.dni;
    }
    
    set Dni(nuevo_dni){
        this.dni = nuevo_dni;
    }
    
    get Fentrada(){
        return this.fentrada;
    }
    
    get Dni {
        return this.Dni;
    }

}
