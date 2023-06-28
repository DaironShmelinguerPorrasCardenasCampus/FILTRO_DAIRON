<?php

class Conectar{

    protected $dbCnx;
    protected function Conexion(){
        try {
            $conectar = $this->dbCnx = new PDO("mysql:local=localhost;dbname=campusland","campus","campus2023");
            return $conectar;
        
        } catch (Exception $e) {
            return $e->getMessage();
        }
    
    }

    public function set_name(){
        return $this->dbCnx->query("SET NAMES 'utf8'");
    }

}







?>