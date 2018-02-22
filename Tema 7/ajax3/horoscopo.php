<?php
header('Content-Type: text/html; charset=utf-8');
sleep(2);

if ($_POST['mes']==3 && $_POST['dia']>=21 && $_POST['dia']<=31 || $_POST['mes']==4 && $_POST['dia']>=1 && $_POST['dia']<=20 )
  echo '{"estado":true,"signo":"Aries","texto":"Hoy los cambios serán físicos, personales, de carácter, Te sentirás impulsivo y tomarás  iniciativas. Período en donde considerarás unirte a agrupaciones de beneficencia, o de ayuda a los demás."}';
else if ($_POST['mes']==4 && $_POST['dia']>=21 && $_POST['dia']<=30 || $_POST['mes']==5 && $_POST['dia']>=1 && $_POST['dia']<=20 )
    echo '{"estado":true,"signo":"Tauro","texto":"Hoy los cambios serán privados, íntimos. Recuerdos. Ayuda, solidaridad. Asuntos en lugares de retiro. Tu cónyuge puede aportar buen status a tu vida o apoyo a tu profesión."}';

else if ($_POST['mes']==5 && $_POST['dia']>=21 && $_POST['dia']<=31 || $_POST['mes']==6 && $_POST['dia']>=1 && $_POST['dia']<=20)
  echo '{""estado":true,"signo":"Geminis","texto":"Los asuntos de hoy tienen que ver con las amistades, reuniones, actividades con ellos. Día esperanzado, ilusiones. Mucha energía sexual y fuerza emocional. Deseos difíciles de controlar."}';

else if ($_POST['mes']==6 && $_POST['dia']>=21 && $_POST['dia']<=30 || $_POST['mes']==7 && $_POST['dia']>=1 && $_POST['dia']<=21)
  echo '{"estado":true,"signo":"Cancer","texto":"Este día la profesión y las relaciones con superiores y con tu madre serán de importancia. Actividad en relación a estos temas. Momentos positivos con compañeros de trabajo. Actividad laboral agradable."}';

else if ($_POST['mes']==7 && $_POST['dia']>=21 && $_POST['dia']<=31 || $_POST['mes']==8 && $_POST['dia']>=1 && $_POST['dia']<=21)
  echo '{"estado":true,"signo":"Leo","texto":"Este día los estudios, los viajes, el extranjero y la espiritualidad serán lo importante. Pensamientos, religión y filosofía también. Vivencias kármicas de la época te vuelven responsable tomando decisiones."}';

else if ($_POST['mes']==8 && $_POST['dia']>=22 && $_POST['dia']<=31 || $_POST['mes']==9 && $_POST['dia']>=1 && $_POST['dia']<=22)
  echo '{"estado":true,"signo":"Virgo","texto":"Para este día toma importancia tu vida sexual, tal vez miedos, temas legales, juicios o herencias. Experiencias extrañas. Hay karma de prueba durante este período en tu parte psicológica, generándose algunos replanteos."}';

else if ($_POST['mes']==9 && $_POST['dia']>=23 && $_POST['dia']<=30 || $_POST['mes']==10 && $_POST['dia']>=1 && $_POST['dia']<=22)
  echo '{"estado":true,"signo":"Libra","texto":"Hoy todo asunto tiene que ver con tu pareja, también con socios, con la gente o el público. Ellos serán lo más importante del día. Ganancias a través de especulaciones o del juego. Actividades vocacionales artísticas."}';

else if ($_POST['mes']==10 && $_POST['dia']>=23 && $_POST['dia']<=31 || $_POST['mes']==11 && $_POST['dia']>=1 && $_POST['dia']<=22)
  echo '{"estado":true,"signo":"Escorpio","texto":"Hoy todo asunto tiene que ver con temas de trabajo y de salud. Presta atención a ambos. Experiencias diversas con compañeros. Durante este período tendrás muchos recursos para ganar dinero." }';

else if ($_POST['mes']==11 && $_POST['dia']>=23 && $_POST['dia']<=30 || $_POST['mes']==12 && $_POST['dia']>=1 && $_POST['dia']<=20)
  echo '{"estado":true,"signo":"Sagitario","texto":"Durante este día se vivirán cambios en relación a los noviazgos o a los hijos. Creatividad, actividad, diversiones y salidas. Período de encuentros con personas o situaciones que te impresionan."}';

else if ($_POST['mes']==12 && $_POST['dia']>=21 && $_POST['dia']<=31 || $_POST['mes']==1 && $_POST['dia']>=1 && $_POST['dia']<=19)
  echo '{"estado":true,"signo":"Capricornio","texto":"Los cambios del día tienen que ver con tu hogar, con la convivencia y con el padre. Asuntos relativos al carácter en la convivencia. El karma de responsabilidad de estos momentos te acercará al mundo de lo desconocido, mucha madurez y contacto con el más allá."}';

else if ($_POST['mes']==1 && $_POST['dia']>=20 && $_POST['dia']<=31 || $_POST['mes']==2 && $_POST['dia']>=1 && $_POST['dia']<=18)
  echo '{"estado":true,"signo":"Acuario","texto":"Hoy todo asunto tiene que ver con el entorno inmediato, hermanos y vecinos, con la comunicación, los viajes cortos o traslados frecuentes. El hablar y trasladarse será importante hoy. Mentalidad e ideas activas."}';

else if ($_POST['mes']==2 && $_POST['dia']>=19 && $_POST['dia']<=29 || $_POST['mes']==3 && $_POST['dia']>=1 && $_POST['dia']<=20)
  echo '{"estado":true,"signo":"Piscis","texto":"Durante este día se vivirán cambios en la economía, movimientos en los ingresos, negocios, valores. Momentos de gran fuerza y decisión profesionales, buscarás el liderazgo."}';

else
  echo '{"estado":false}';
?>