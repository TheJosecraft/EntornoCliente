<?php
header('Content-Type: text/html; charset=utf-8');
sleep(1);
$dbhost='localhost';
$dbuser='root';
$dbpass='';
$dbname='ajax';



$conexion=mysqli_connect($dbhost,$dbuser,$dbpass) or die('{"estado":false,"mensaje":"Fallo en connect"}');
mysqli_select_db($conexion,$dbname) or die('{"estado":false,"mensaje":"Fallo en select"}');

$opcion=$_POST["opcion"];
$user=$_POST["user"];
$pass=$_POST["pass"];

switch($opcion)
{
	case "registro":
       $query="INSERT INTO usuarios (user,pass,tipo) values ('$user','$pass','normal');";
       $result=mysqli_query($conexion,$query) or die('{"estado":false,"mensaje":"Fallo al insertar"}');
       
       echo '{"estado":true,"mensaje":"El usuario fue insertado"}';
	break;

    case "autenticar":
      $query="SELECT * FROM usuarios WHERE user='$user' AND pass='$pass'";
      
      $resultado=mysqli_query($conexion,$query) or die($error);
      if(mysqli_num_rows($resultado)>0)
      {
         $usuario=mysqli_fetch_assoc($resultado);
         //Iniciar variables de session o cokies para que pueda acceder al resto de servicios 
         
         if($usuario["tipo"]=="admin")
         {
              $query="SELECT * FROM usuarios";
		      $respuesta["estado"]=true;
		      $respuesta["datos"]=array();
		      $resultado=mysqli_query($conexion,$query) or die($error);
		      while($fila=mysqli_fetch_assoc($resultado))
		      {
		         array_push($respuesta["datos"], json_encode($fila));
		      }
		      echo json_encode($respuesta);
		        	
         }else{
            $respuesta["estado"]=true;
            $respuesta["datos"]=$usuario;
            echo json_encode($respuesta);	
         }
      }else{
         echo '{"estado":false,"mensaje":"El usuario no existe"}';
      }
      break;
     default:
        echo '{"estado":false,"mensaje":"La opcion pedida no es valida"}';
}




?>

