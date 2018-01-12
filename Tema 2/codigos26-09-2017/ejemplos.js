var mes=prompt("Introduce el mes del año");

switch(mes)
{
     case "Enero":
     case "Marzo":
     case "Mayo":
     case "Julio":
     case "Agosto":
     case "Octubre":
     case "Diciembre":
               alert("El mes tiene 31 dias");
          break;
     case "Febrero":
               alert("El mes tiene 28 dias(si no es bisiesto");
        break;
     case "Abril":
     case "Junio":
     case "Septiembre":
     case "Noviembre":
               alert("El mes tiene 30 dias");
        break;
     default:
         alert("No es un mes valido");
}
               
     

