$(document).ready(function() {

    $(document).ajaxStart(function() {

    }).ajaxStop(function() {

    })

    $("p a").click(function(event) {
        event.preventDefault();
        var url = $(this).attr("href");
        console.log(url);
        $.get(url, AjaxGet);
    })

});

function AjaxGet(datos) {
    $("#info").html(datos);
}