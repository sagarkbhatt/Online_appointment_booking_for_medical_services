<?php
$errors = array();
$data = array();
// Getting posted data and decodeing json
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);



$doc=$request->doctor_id;
$client=$request->user_id;

$date=$request->date_t;
$priority=$request->priority;

$status=NULL;

require_once 'connection.php';

$mysqli=new mysqli($localhost,$user,$password,$db);

if($mysqli->connect_error > 0){
	
	$errors['con'] ='Connection error';
	
}else{


    $qry="insert into appointment_detail values(default,'$client','$doc','$status','$date','$priority')";
    
    $result=$mysqli->query($qry);
    
    if($result == true){
    
    $data['msg']='Your request is sent to docotor and once doctor approved it you will get reply of your appointment detail via
    email or phone ,Thanking you for being with us';
    
    }else{
    
    $errors['error']='Database error';
    
    }

$mysqli->close();
}

if (empty($errors)) {
     $data['success'] = true;
//    $data['message'] = 'Form data is going well';
  
} else {
    $data['success'] = false;
    $data['errors']  = $errors;
   
}


echo json_encode($data);
?>