<?php
require_once("../../base/start.php");
require_once(API_ROOT . "/controllers/getData/getData.query.php");
require_once(API_ROOT . "/base/jwt.php");


function getAppData() {
    try {
        $query = new GetAppData();
        $resultAppData = $query->getAppData();
        $resultOrder = $query->getOrders();
        $returnArr = [$resultAppData,$resultOrder];
        echo json_encode($returnArr);
        http_response_code(200);
        return ;
        

    } catch (Throwable $e) {
        http_response_code(400);
        return ;
    }
}
$api = new RestApi('getAppData');
?>