var carta = $(".card");
var datos;
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


});

function mostrar(datos) {
	carta = $(".card");
    console.log(datos);

    for (var i = 0; i < 4; i++) {
        console.log("Mostrar");
        imagen = carta.eq(i).find(".card-img-top");
        titulo = carta.eq(i).find(".card-title");
        contenido = carta.eq(i).find(".card-text").eq(0);
        enlace = carta.eq(i).find("a");
        fecha = carta.eq(i).find(".text-muted").eq(0);

        console.log(imagen);
        console.log(titulo);
        console.log(contenido);
        console.log(enlace);

        imagen.attr("src", datos[i]["image"]);
        titulo.text(datos[i]["longTitle"]);
        enlace.attr("href", datos[i]["htmlUrl"]);
        contenido.html(datos[i]["summary"]);
        fecha.text(datos[i]["publicationDate"])
    }

}