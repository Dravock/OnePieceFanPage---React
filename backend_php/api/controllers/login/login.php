<?php 
require_once("../../base/start.php");
require_once(API_ROOT . "/base/jwt.php");




function userLogin () {
    try {
            echo json_encode("return_data_war_da");
            return http_response_code(200);
    } catch (Throwable $e) {
        http_response_code(500);
        die ;
    }
}


$api = new RestApi(null,'userLogin');
?>