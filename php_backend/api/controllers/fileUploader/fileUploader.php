<?php
require_once("../../base/start.php");
require_once(API_ROOT . "/controllers/fileUploader/fileUploader.query.php");
require_once(API_ROOT . "/base/jwt.php");


function file_force_contents( $fullPath, $contents, $flags = 0 ){
    $parts = explode( '/', $fullPath );
    array_pop( $parts );
    $dir = implode( '/', $parts );
    
    if( !is_dir( $dir ) )
        mkdir( $dir, 0777, true );

    $get_Raw_string = explode(",",$contents);
    
    file_put_contents( $fullPath, base64_decode($get_Raw_string[1]), $flags );
}

function dateFormatter ($old_date){
    $explodeDate= explode("/",$old_date);
    $newDateFormat=$explodeDate[0]."_".$explodeDate[1]."_".$explodeDate[2];
    return $newDateFormat;
}

function fileUploader() {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);
        
        $date=$obj->date;
        $formatDate = dateFormatter($date);
        $problemName=$obj->problem_bezeichnung;
        $problemText=$obj->problem_kommentar;
        $prodNr = $obj->prod_nr;
        $photoData=$obj->photo;
        $voiceData=$obj->voice;

        if(!empty($photoData)){
            $photoPath = ROOT.'/files/photos/'.$prodNr.'/'.$formatDate.'/'.$problemName.'.png';
            file_force_contents( $photoPath, $photoData, LOCK_EX );
        }
        if(!empty($voiceData)){
            $voicePath = ROOT.'/files/voice/'.$prodNr.'/'.$formatDate.'/'.$problemName.'.mp3';
            file_force_contents( $voicePath, $voiceData, LOCK_EX );
        }

    } catch (Throwable $e) {
        http_response_code(400);
        return ;
    }
}
$api = new RestApi(null,"fileUploader");
?>