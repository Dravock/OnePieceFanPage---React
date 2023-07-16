<?php
require_once("../../base/start.php");
require_once(API_ROOT . "/base/jwt.php");


function getAppData() {
    try {
        echo json_encode("ja war da");
        http_response_code(200);
        return ;
        

    } catch (Throwable $e) {
        http_response_code(400);
        return ;
    }
}
$api = new RestApi('getAppData');
?>