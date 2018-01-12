$(document).ready(Inicio);

/*$(document).ready(function(){
    alert("Holaaaa");
});*/
//document.addEventListener("load",Inicio);

function Inicio()
{
	var parrafos=$("p");
    
    /*alert(parrafos.eq(2).text("Parrafo modificado"));
    var parrafo2=parrafos.eq(2);
    */
    parrafos.click(Saludo);
    
    $("div#info").mouseenter(function()
    {
         // $(this).html("<input type='text'>Entrada de datos");

         //$(this).css("background-color","red");
         
         $(this).addClass("rojo");
         //$(this).addClass("letra");
         if($(this).hasClass("rojo"))
         {
             $(this).removeClass("rojo");	
             $(this).addClass("verde");
         }
 
    });

    

    $("#enviar").click(Enviar);


    $("#boton").click(PonerQuitar);

    $("p").hover(function(){
                 $(this).css("background-color", "yellow");
    },           function(){
                 $(this).css("background-color", "pink");
});
}

function PonerQuitar()
{
	//$("div#info").toggle();
	$("div#info").fadeToggle();
}

$("<p id='inicio' class='color'><b>Parrafo en negrita</b></p>");


function Enviar()
{

    var texto=$("#contenido").val();
    $("div#info").html("<h1>"+texto+"</h1>");
}


function Saludo()
{
	//alert($(this).text());

	/*$(this).slideUp(1500,function(){
                            alert("Terminooooo");
	                     }

	);*/
    var contenido=$(this).html();
    $(this).html(contenido+"<b>Negrita</b><i>Italica</i>");







}



