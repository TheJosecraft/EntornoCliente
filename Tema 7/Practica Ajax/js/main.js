var carta = $(".card");
var copiaCarta;
var noticias;
var indice = 0;
$(document).ready(function() {

    cargarDatos();

    $(document).ajaxStart(function(){
        setTimeout(function() {
            $("#cargando").show().addClass("d-flex");
        });
    });

    $(document).ajaxStop(function() {

        setTimeout(function() {
            $("#cargando").hide().removeClass("d-flex");
        }, 1000);
    });

    $("#mostrar").click(mas);
    $("#actualizar").click(actualizarDatos);

    console.log("Noticias: " + noticias);

});

function cargarDatos(){
    for (var i = 0; i < 3; i++) {
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

};

function actualizarDatos(){
    copiaCarta = $(".card").eq(0);
    $("#noticias").empty();
    indice = 0;

    console.log("Copia: " + copiaCarta)

    for (var i = 0; i < 4; i++) {
        console.log(carta[0]);
        copiaCarta.clone().appendTo("#noticias");
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

};

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

        if (datos[i]["image"] == null) {
            imagen.remove();
        } else {
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

function mas() {
    if (indice < noticias.length) {
        console.log("Ver más");
        console.log(noticias);
        datos = noticias;

        carta = $(".card");

        for (var i = 0; i < 4; i++) {
            carta.eq(0).clone().appendTo("#noticias");
        }

        carta = $(".card");

        for (var i = 0; i < 4; i++) {
            console.log("Mostrar");
            console.log("Índice: " + indice);
            console.log("i: " + i);
            imagen = carta.eq(indice).find(".card-img-top");
            titulo = carta.eq(indice).find(".card-title");
            contenido = carta.eq(indice).find(".card-text").eq(0);
            enlace = carta.eq(indice).find("a");
            fecha = carta.eq(indice).find(".text-muted").eq(0);

            console.log(imagen);
            console.log(titulo);
            console.log(contenido);
            console.log(enlace);
            console.log(fecha);

            if (datos[indice]["image"] == null) {
                imagen.remove();
            } else {
                imagen.attr("src", datos[indice]["image"]);
            }

            titulo.text(datos[indice]["longTitle"]);
            enlace.attr("href", datos[indice]["htmlUrl"]);
            contenido.html(datos[indice]["summary"]);
            fecha.text(datos[indice]["publicationDate"])
            indice++;
            console.log("Suma índice: " + indice);
        }
    }else{
    	$(this).remove();
    	$("div.alert").removeClass("d-none").addClass("d-block");
    }

}