/*function Parrafos() {
	var parrafos = document.getElementsByTagName('p');
	var enlaces = document.getElementsByTagName('a');

	alert("Resumen: "+parrafos.length+" párrafos y "+enlaces.length+" enlaces");
	alert("El primer enlace apunta a: "+enlaces[0].href);
	alert("El último enlace apunta a: "+enlaces[enlaces.length-1].href);
}
/*
window.onload=Parrafos;*/
/*
function Etiquetas(){
	var buscador = document.getElementById('buscador');
	var noticias = document.getElementById('noticias');
	var menu_prinipal = document.getElementById('menu_principal');
	var secundario = document.getElementById('secundario');
	var pie = document.getElementById('pie');

	var etiquetas;
	etiquetas[0] = buscador;
	etiquetas[1] = noticias;
	etiquetas[2] = menu_principal;
	etiquetas[3] = secundario;
	etiquetas[4] = pie;

	for (var i = 0; i < etiquetas.length; i++) {
		
		if(etiquetas[i] != etiquetas[i-1]){
			alert(etiquetas[i]);
		}
	}
}

window.onload=Inicio;

function Inicio()
{
	/*var enlaces = document.querySelectorAll("a");
var primer= enlaces[0]; // guarda el primer enlace de la página
for(i=0; i<enlaces.length; i++)
{
	alert(enlaces[i].href); //muestra un alert con el href de cada enlace
}
*/



/*
var cabecera = document.querySelector("#cabecera");
alert(cabecera);


var capa = document.querySelector("#secundario");
capa.style.backgroundColor="#F0C0C0";
capa.style.borderTopWidth="20px";
alert(capa.style.backgroundColor); 
alert(capa.style.borderTopWidth);


}

alert("fsdfds");*/


window.onload=Inicio;

function Inicio()
{
	var capa = document.querySelector("#secundario");
	capa.style.backgroundColor="#F0C0C0";
	capa.style.borderTopWidth="20px";
	alert(capa.style.backgroundColor); 
	alert(capa.style.borderTopWidth);
}


















