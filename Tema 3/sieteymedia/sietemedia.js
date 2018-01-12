var puntuaciones=[
                  1,2,3,4,5,6,7,0.5,0.5,0.5,  //basto
                  1,2,3,4,5,6,7,0.5,0.5,0.5,  //copa
                  1,2,3,4,5,6,7,0.5,0.5,0.5,  //espada
                  1,2,3,4,5,6,7,0.5,0.5,0.5   //oro
                 ];

var cartas=[
            "basto/1.jpg","basto/2.jpg","basto/3.jpg","basto/4.jpg","basto/5.jpg","basto/6.jpg",
            "basto/7.jpg","basto/10.jpg","basto/11.jpg","basto/12.jpg",
            "copa/1.jpg","copa/2.jpg","copa/3.jpg","copa/4.jpg","copa/5.jpg","copa/6.jpg",
            "copa/7.jpg","copa/10.jpg","copa/11.jpg","copa/12.jpg",
            "espada/1.jpg","espada/2.jpg","espada/3.jpg","espada/4.jpg","espada/5.jpg","espada/6.jpg",
            "espada/7.jpg","espada/10.jpg","espada/11.jpg","espada/12.jpg",
            "oro/1.jpg","oro/2.jpg","oro/3.jpg","oro/4.jpg","oro/5.jpg","oro/6.jpg",
            "oro/7.jpg","oro/10.jpg","oro/11.jpg","oro/12.jpg"
           ];


var puntuacion=0;
var aleatorio;
var continuar=true;
var respuesta=false;
var fuera=[];
function Carta()
{

   do
   {
      aleatorio=Math.floor(Math.random()*40); //0 a 39
   }while(fuera.indexOf(aleatorio)!=-1);
   
   fuera.push(aleatorio);

   document.body.innerHTML+="<img src='"+cartas[aleatorio]+"'>";
   puntuacion+=puntuaciones[aleatorio];
   if(puntuacion>7.5)
   {
        alert("Has perdido");
        location.reload();
   }else if(puntuaciones==7.5){
        alert("Has ganado");
   }else{
        alert("Puedes seguir");
   }
   
}





   
 
























          