var color1 = prompt("Introduzca color 1");
var color2 = prompt("Introduzca color 2");
var color3 = prompt("Introduzca color 3");
var color4 = prompt("Introduzca color 4");
var color5 = prompt("Introduzca color 5");
    
document.write("<style type='text/css'>" +
              
               "h1{ animation: cambiar_colores 7s infinite}" +
               "@keyframes cambiar_colores{" +
                    "0%      {color:" + color1 + ";}" +
                    "25%     {color:" + color2 + ";}" +
                    "50%     {color:" + color3 + ";}" +
                    "75%     {color:" + color4 + ";}" +
                    "100%    {color:" + color5 + ";}" +
               
               "}" +
               
              "</style>");

