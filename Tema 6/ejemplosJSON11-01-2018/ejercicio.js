$(document).ready(Inicio);
var lista_objetos=[];
function Inicio()
{

/*var nombre=prompt("Escribe el nombre:");
var apellidos=prompt("Escribe los apellidos:");
var edad=prompt("Escribe la edad:");

json_text='{"nombre":"'+nombre
         +'","apellidos":"'+apellidos
         +'","edad":'+edad+'}';
*/

/*var datos=prompt("Escribe tus datos personales");
campos=datos.split(",");

json_text='{"nombre":"'+campos[0]
         +'","apellidos":"'+campos[1]
         +'","edad":'+campos[2]+'}';

*/

/*$("div#info").text(json_text);
objeto_json=JSON.parse(json_text);
alert(objeto_json["nombre"]);
*/

   $("#crear").click(CrearJSON);
   $("#mostrar").click(MostrarJSON);


}

function CrearJSON()
{
	var nombre=$("#nombre").val();
	var apellidos=$("#apellidos").val();
	var edad=$("#edad").val();

    var json_text='{"nombre":"'+nombre
         +'","apellidos":"'+apellidos
         +'","edad":'+edad+'}';
    
    var objeto_json=JSON.parse(json_text);
    lista_objetos.push(objeto_json);
    //Ya esta creado el objeto
}

function MostrarJSON()
{
	$("div#info").text(JSON.stringify(lista_objetos));
}








