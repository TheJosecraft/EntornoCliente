//Partiendo del ejercicio 9, además de crearlas y añadirlas al body asignar los
//siguientes eventos a cada caja:
// Cuando se haga clic en una caja sumarle 5 al número que contiene.
// Cuando el ratón entre en una caja restarle 2 al número que contiene.
// El número que contiene la caja nunca podrá ser negativo o superar 300.
// En caso de que no se cumpla los anterior no modificar el número y mostrar
//un alert de aviso.
$(document).ready(function(){
    
    for(var i = 16; i <= 255; i++){
        
        $("body").append("<div id=caja" + i + ">" + i + "</div>");
        $("#caja" + i).click(Clic).hover(Hover);
        
    }
    
    function Clic(){
        var numero = $(this).text();
        
        numero = parseInt(numero);
        
        $(this).text(numero + 5);
        
        console.log(numero + " + 5" + " = " + (numero + 5));
    }
    
    function Hover(){
        
        var numero = $(this).text();
        
        numero = parseInt(numero);
        
        $(this).text(numero - 2);
        
        console.log($(this).text());
        
        console.log(numero + " - 2" + " = " + (numero - 2));
    }
    
});