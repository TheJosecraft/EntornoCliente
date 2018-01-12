var objeto_json={"nombre":"Antonio",
                 "apellidos":"Garcia Serrano",
                 "edad":23,
                 "direccion":{"numero":3,
                              "calle":"La que sea",
                              "ciudad":"Granada"
                             },
                 "telefonos":["958289229","423423423","958553443"]
                };


/*alert(objeto_json.nombre);

alert(objeto_json["nombre"]);

var campo=prompt("¿Que dato de la persona desea saber");

alert(objeto_json[campo]);


document.write(objeto_json.direccion.ciudad+"<br>")
document.write(objeto_json["direccion"]["ciudad"]+"<br>")
document.write(objeto_json["telefonos"][0]+"<br>")
*/
for (var i in objeto_json)
{
   if(typeof(objeto_json[i])!="object")
   {  
     document.write("Contenido de "+i+": "+ objeto_json[i]+"<br>");      
   }else{
    for(var j in objeto_json[i])
    {
     document.write("Contenido de "+j+": "+ objeto_json[i][j]+"<br>"); 
    }

   }
}

document.write("<br>");
document.write(JSON.stringify(objeto_json));

var json='{"nombre":"Antonio","apellidos":"Garcia Serrano","edad":23}';

var objeto=JSON.parse(json);

alert(objeto["nombre"]);








/*alert(typeof(objeto_json["telefonos"]));

var lista=objeto_json["direccion"];

for(i=0;i<lista.length;i++)
{
 alert(lista[i]); 
}

for(i in lista)
{
  alert(lista[i]);
}


*/