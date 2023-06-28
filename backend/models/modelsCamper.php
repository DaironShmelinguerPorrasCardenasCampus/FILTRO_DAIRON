<?php

class Camper extends Conectar{

    public function get_campers(){
        try {
            $conectar = parent::Conexion();
            parent::set_name();
            $stm = $conectar->prepare("SELECT * FROM campers");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);

        } catch (Exception $e) {
            return $e->getMessage();
        }
    
    }
    
    public function insertar_Camper($idCamper,$nombreCamper,$apellidoCamper,$fechaNac,$FkidReg){
        $conectar = parent::Conexion(); 
        parent::set_name();

        $stm = "INSERT INTO campers (idCamper,nombreCamper,apellidoCamper,fechaNac,FkidReg) VALUES(?,?,?,?,?)";
        $stm = $conectar->prepare($stm);
        $stm->bindValue(1,$idCamper);
        $stm->bindValue(2,$nombreCamper);
        $stm->bindValue(3,$apellidoCamper);
        $stm->bindValue(4,$fechaNac);
        $stm->bindValue(5,$FkidReg);
        $stm->execute();
        return $stm->fetchAll(PDO::FETCH_ASSOC);
        
    
    }
     
}



?>