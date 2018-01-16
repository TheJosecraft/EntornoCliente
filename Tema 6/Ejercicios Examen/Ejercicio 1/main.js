$(document).ready(function(){
    var parrafo1 = $("#primero");
    var parrafo2 = $("#segundo");
    
    var texto2 = parrafo2.text();
    parrafo2.text(parrafo1.text());
    parrafo1.text(texto2);
});