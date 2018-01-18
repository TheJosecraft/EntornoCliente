$(document).ready(function(){
    
    for(var i = 1; i <= 100; i++){
        var caja = $("<div>" + i + "</div>");
        caja.addClass("caja");
        $("body").append(caja);
    }
    
});