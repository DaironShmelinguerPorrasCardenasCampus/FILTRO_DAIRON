<?php

header('Content-Type: application/json');

require_once("../conexion/conexion.php");
require_once("../models/modelsCamper.php");

$camper = new Camper();
$body = json_decode(file_get_contents("php://input"), true);


switch ($_GET["op"]) {
    case 'GetAll':
        $datos = $camper->get_campers();
        echo json_encode($datos);
        break;
    
    case 'insert':
        $datos = $camper->insertar_Camper($body['idCamper'],$body['nombreCamper'],$body['apellidoCamper'],$body['fechaNac'],$body['FkidReg']);
        echo json_encode("DATOS INGRESADOS CORRECTAMENTE");
        break;
    default:
        # code...
        break;
}









?>