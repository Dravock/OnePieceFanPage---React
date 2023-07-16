<?php 
require_once("../../base/start.php");
require_once(API_ROOT . "/controllers/login/login.query.php");
require_once(API_ROOT . "/base/jwt.php");


function checkUserLogin(){
    AuthMiddleware::checkAuth();
}

function userLogin () {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);
        $query = new UserLogin();
        $result = $query->verifyUser($obj);
        if(count($result)!==0){
            $db_pass=$result[0]['password'];
            $verified = password_verify($obj->pw,$db_pass);
            if($verified){
                $payload = ['vorname'=>$result[0]['first_name'],'nachname'=>$result[0]["last_name"],"username"=>$result[0]['username']];
                $jwt = JWT::generate_jwt($payload);
                $return_data=['id'=>$obj->user, 'vorname'=>$result[0]['first_name'],'nachname'=>$result[0]["last_name"],'email'=>$result[0]['email'],'jwt'=>$jwt,'role'=>$result[0]['role']];
                echo json_encode($return_data);
                return http_response_code(200);
            }else{
                http_response_code(401);
                throw new Exception("PASSWORD NOT VERIFIED", 1);
            }
        }else{
            throw new Exception("No Data", 1);
        }
    } catch (Throwable $e) {
        http_response_code(500);
        die ;
    }
}


$api = new RestApi('checkUserLogin','userLogin');
?>