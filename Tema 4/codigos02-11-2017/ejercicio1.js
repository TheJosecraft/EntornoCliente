function Reserva(d,fe,fs,p)
{
	var dni=d;
	var fentrada=fe;
	var fsalida=fs;
	var personas=p;

	this.getDni=function()
	{
		return dni;
	}
	this.setDni=function(nuevo_dni)
	{
		dni=nuevo_dni;
	}
	this.getFEntrada=function()
	{
		return fentrada;
	}
	this.setFEntrada=function(nueva_fecha)
	{
		fentrada=nuevo_fecha;
	}

	this.getFSalida=function()
	{
		return fsalida;
	}
	
	this.setFSalida=function(nueva_fecha)
	{
		fsalida=nuevo_fecha;
	}

    this.getPersonas=function()
    {
    	return personas;
    }

    this.setPersonas=function(nueva_personas)
    {
    	personas=nueva_personas;
    }

    this.getDiasReserva = function()
    {
    	return Math.ceil((fsalida-fentrada)/1000/3600/24);
    }

    this.coste = function(){
    	var precio = 0;
    	switch(this.getPersonas()){
    		case 1:
    			precio = 30 * this.getDiasReserva();
    			break;
    		case 2:
				precio = 50 * this.getDiasReserva();
    			break;
    		case 3:
				precio = 65 * this.getDiasReserva();;
    			break;
    		case 4:
				precio = 75 * this.getDiasReserva();;
    			break;
    	}

    	return precio;
    }
}

function Alojamiento(d,fe,fs,p,de,pe){
	Reserva.call(this, d, fe, fs, p);
	var desayuno = de;
	var pension = pe;

	this.isDesayuno = function(){
		return desayuno;
	}

	this.setDesayuno = function(nuevo_desayuno){
		desayuno = nuevo_desayuno;
	}

	this.getPension = function(){
		return pension;
	}

	this.setPension = function(nueva_pension){
		pension = nueva_pension;
	}

	this.costeTotal = function(){
		var costeTotal = this.coste();
		if(desayuno){
			costeTotal = costeTotal + (10*this.getPersonas()*this.getDiasReserva());
		}

		if(pension == 1){
			costeTotal = costeTotal + (20*this.getPersonas()*this.getDiasReserva());
		}else if(pension == 2){
			costeTotal = costeTotal + (30*this.getPersonas()*this.getDiasReserva());
		}

		return costeTotal;
	}

	this.imprimirFactura = function(){
		//dni, num personas, desayuno, pension
		document.write("<h1>DNI FACTURA: "+this.getDni()+"</h1>");
		document.write("<p><strong>Número de personas:</strong> "+this.getPersonas()+"</p>");
		document.write("<p><strong>Fecha entrada: </strong>"+this.getFEntrada()+"</p>");
		document.write("<p><strong>Fecha salida: </strong>"+this.getFSalida()+"</p>");
		if(this.isDesayuno()){
			document.write("<p><strong>Desayuno: </strong>SI</p>");
		}else{
			document.write("<p><strong>Desayuno:</strong> NO</p>");
		}

		if(this.getPension() == 1){
			document.write("<p><strong>Pension: </strong>Media</p>");
		}else if(this.getPension() == 2){
			document.write("<p><strong>Pension:</strong> Completa</p>");
		}

		document.write("<h2>COSTE TOTAL: "+this.costeTotal()+"</h2>");
	}
}

Alojamiento.prototype = new Reserva;
var aloja = new Alojamiento("74727373D",new Date(),new Date("2017-11-10"),1, false, 2);
aloja.imprimirFactura();