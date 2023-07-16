<?php 
require_once(API_ROOT . "/config.php");
require_once(API_ROOT . "/base/db.php");

class GetAppData extends Database{
    private $machineInfo;
    private $freigabeInfo;
    private $auftraege;

    
    public function __construct(){
        parent::__construct();
        $this->machineInfo = Config::$machines;
        $this->freigabeInfo = Config::$freigabeInfo;
        $this->auftraege = Config::$auftraege;
    }
    
    public function getAppData(){
        $stmt = $this->conn->prepare("SELECT    $this->machineInfo.machine_name,$this->machineInfo.auftrag_id,$this->machineInfo.machine_id,
                                                $this->freigabeInfo.freigabe_von, $this->freigabeInfo.freigabe_status,$this->freigabeInfo.auftrag_id,$this->freigabeInfo.freigabe_row_id,
                                                $this->auftraege.prio_status
                                                    FROM (($this->auftraege
                                                            LEFT JOIN $this->freigabeInfo ON $this->auftraege.auftrags_id = $this->freigabeInfo.auftrag_id)
                                                                LEFT JOIN $this->machineInfo ON  $this->auftraege.auftrags_id = $this->machineInfo.auftrag_id)
                                                                WHERE $this->machineInfo.auftrag_id = $this->auftraege.auftrags_id
                                                                    ORDER BY  $this->machineInfo.machine_id  ASC");
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }

    public function getOrders(){
        $stmt = $this->conn->prepare("SELECT $this->auftraege.auftrags_id FROM $this->auftraege ");
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }
}
?>

