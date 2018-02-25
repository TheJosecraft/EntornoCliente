var carta = $(".card");
var noticias;
var indice = 0;
$(document).ready(function() {

	for(var i = 0; i < 3; i++){
    	console.log(carta[0]);
    	carta.clone().appendTo("#noticias");
    }

    $.ajax({
        url: 'http://www.rtve.es/api/noticias.json',
        type: 'GET',
        dataType: 'json'
    }).done(function(json) {
        mostrar(json["page"]["items"]);
    }).fail(function() {
        alert("ERROR");
    });

    $("#mostrar").click(function(event) {
        event.preventDefault();
    });

    $(document).ajaxStart(function() {
        $("#cargando").show();

    });

    $(document).ajaxStop(function() {

        setTimeout(function() {
            $("#cargando").hide();
        }, 1000);
    });

    $("#mostrar").click(mas);

    console.log("Noticias: " + noticias);

});

function mostrar(datos) {
	carta = $(".card");
	noticias = datos;

    for (var i = 0; i < 4; i++) {
        console.log("Mostrar");

        imagen = carta.eq(i).find(".card-img-top");
        titulo = carta.eq(i).find(".card-title");
        contenido = carta.eq(i).find(".card-text").eq(0);
        enlace = carta.eq(i).find("a");
        fecha = carta.eq(i).find(".text-muted").eq(0);

        console.log(datos[i]["image"]);

        if(datos[i]["image"] == null){
        	imagen.remove();
        }else{
        	imagen.attr("src", datos[i]["image"]);
        }
        
        titulo.text(datos[i]["longTitle"]);
        enlace.attr("href", datos[i]["htmlUrl"]);
        contenido.html(datos[i]["summary"]);
        fecha.text(datos[i]["publicationDate"])
        indice++;
        console.log(indice);
    }

}

function mas(){
	console.log("Ver más");
	console.log(noticias);
	datos = noticias;

	carta = $(".card");
	
	for(var i = 0; i < 4; i++){
    	carta.eq(0).clone().appendTo("#noticias");
    }

    paginacion();
}

function paginacion(){
	for (var i = 0; i < 4; i++) {
        console.log("Mostrar");
        console.log("índice: " + indice);
        console.log("i: " + i);
        imagen = carta.eq(indice).find(".card-img-top");
        titulo = carta.eq(indice).find(".card-title");
        contenido = carta.eq(indice).find(".card-text").eq(0);
        enlace = carta.eq(indice).find("a");
        fecha = carta.eq(indice).find(".text-muted").eq(0);

        if(datos[indice]["image"] == null){
        	imagen.remove();
        }else{
        	imagen.attr("src", datos[indice]["image"]);
        }
        
        titulo.text(datos[indice]["longTitle"]);
        enlace.attr("href", datos[indice]["htmlUrl"]);
        contenido.html(datos[indice]["summary"]);
        fecha.text(datos[indice]["publicationDate"])
        indice++;
        console.log("Suma índice: " + indice);
    }
}
