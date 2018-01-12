function Reserva(d, fe, fs, p) {
    var dni = d;
    var fentrada = fe;
    var fsalida = fs;
    var personas = p;

    this.getDni = function () {
        return dni;
    }
    this.setDni = function (nuevo_dni) {
        dni = nuevo_dni;
    }
    this.getFEntrada = function () {
        return fentrada;
    }
    this.setFEntrada = function (nueva_fecha) {
        fentrada = nueva_fecha;
    }

    this.getFSalida = function () {
        return fsalida;
    }

    this.setFSalida = function (nueva_fecha) {
        fsalida = nueva_fecha;
    }

    this.getPersonas = function () {
        return personas;
    }

    this.setPersonas = function (nueva_personas) {
        personas = nueva_personas;
    }


    this.coste = function () {
        if (this.getPersonas() == 1) {
            return 30 * this.DiasReserva();
        } else if (this.getPersonas() == 2) {
            return 50 * this.DiasReserva();
        } else if (this.getPersonas() == 3) {
            return 65 * this.DiasReserva();
        } else if (this.getPersonas() == 4) {
            return 75 * this.DiasReserva();
        } else {
            return 0;
        }
    }

    this.DiasReserva = function () {

        return Math.ceil((fsalida - fentrada) / 1000 / 3600 / 24);
    }


}

function Alojamiento(res, des, pen) {
    Reserva.call(this, res);

    var desayuno = des;
    var pension = pen;

    this.costeTotal = function () {
        
        var costeTot = res.coste();
        
        if (desayuno) {
             costeTot += (10 * res.DiasReserva());
        }
        
        if (pension == 1) {
            costeTot += (20 * res.DiasReserva());
        } else if (pension == 2) {
            costeTot += (30 * res.DiasReserva());
        }
        return costeTot;
    }

    this.ImprimirFactura = function () {
        document.write("DNI: " + res.getDni() + "<br>");
        document.write("Personas: " + res.getPersonas() + "<br>");
        document.write("Fecha de entrada: " + res.getFEntrada().getDate() + "/" + res.getFEntrada().getMonth() + "/" + res.getFEntrada().getFullYear() + "<br>");
        document.write("Fecha de salida: " + res.getFSalida() + "<br>");
        document.write("Coste: " + this.costeTotal() + "€<br>");

        if (desayuno == true) {
            document.write("Desayuno: Sí<br>");
        } else {
            document.write("Desayuno: No<br>");
        }

        if (pension == 1) {
            document.write("Pensión: Media<br>");
        } else if (pension == 2) {
            document.write("Pensión: Completa<br>");
        }
    }


}

var reserva = new Reserva("74727373D", new Date(), new Date("2017-11-10"), 2);
var reserva2 = new Reserva("31021855F", new Date(), new Date("2017-11-04"), 3);

alert(reserva2.coste() + "€");
var fecha = new Date(reserva2.getFSalida())
reserva2.setFSalida(fecha.setDate(fecha.getDate() + 3));
alert(reserva2.coste() + "€");

var alojamiento = new Alojamiento(reserva2, true, 2);

alojamiento.ImprimirFactura();
