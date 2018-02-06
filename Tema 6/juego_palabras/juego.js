$(document).ready(Inicio);

var base_juego=[{"palabra":"Monumento",
            "definicion": "Construccion historica que refleja un hecho"},
            {"palabra":"Salida",
            "definicion": "Por donde se sale de un lugar"},
            {"palabra":"Excelente",
            "definicion": "Mejor que bien"},
            {"palabra":"Bañador",
            "definicion": "Prenda acuatica"},
            {"palabra":"Plastico",
            "definicion": "Material derivado del petroleo"},
            {"palabra":"Ordenador",
            "definicion": "Dispositivo programable"},
            {"palabra":"Chaqueta",
            "definicion": "Prenda de vestir"},
            {"palabra":"Coche",
            "definicion": "Vehiculo propulsado a motor"},
            {"palabra":"Avion",
            "definicion":"Vehiculo con alas"}
          ];  

var tablero_json=[];

function Inicio()
{
	var fila;
  var tabla=$("<table></table>");
  var celda;
  var palabra_aleatoria; 
  var utilizadas=[];

  var contador=1;

  for(var i=1;i<=3;i++)
  {
  	fila=$("<tr></tr>");
  	for(var j=1;j<=3;j++)
  	{
      posicion=CogeAleatoria(base_juego,utilizadas);
      celda=$("<td id='casilla"+contador+"'>"+base_juego[posicion]["palabra"][0]+"</td>");
  	  fila.append(celda);
  	  celda.click(Mostrar);
      json_celda={};
      json_celda["id"]="casilla"+contador;
      json_celda["palabra"]=base_juego[posicion]["palabra"];
      json_celda["definicion"]=base_juego[posicion]["definicion"];
      //json_celda["estado"]
      //json_celda["moneda"]=//hay moneda o no hay moneda
      tablero_json.push(json_celda);
      contador++;
    }
  	tabla.append(fila);
  }
  
  $("body").append(tabla);
}

function Mostrar()
{
    var id=$(this).attr("id");
    var respuesta;
    for(var i in tablero_json)
    {
        if(tablero_json[i]["id"]==id)
        {

           respuesta=prompt(tablero_json[i]["definicion"]);
           if(respuesta==tablero_json[i]["palabra"])
           {
              alert("Biennnn");
              tablero_json[i]["estado"] = true;  
           }else{
              alert("Mallll");
          
           }
        }
    }
    console.log(tablero_json);
}

function CogeAleatoria(juego,utilizadas)
{
   var posicion;
   do
   {
      posicion=Math.floor(Math.random()*juego.length);
   }while(utilizadas.indexOf(posicion)!=-1);

   utilizadas.push(posicion);
   return posicion;
}