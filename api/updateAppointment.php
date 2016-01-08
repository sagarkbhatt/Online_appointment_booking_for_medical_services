<?php
$errors = array();
$data = array();
// Getting posted data and decodeing json
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);


$id=$request->id;

$date=$request->utime;


$status=$request->status;
;

require_once 'connection.php';

$mysqli=new mysqli($localhost,$user,$password,$db);

if($mysqli->connect_error > 0){
	
	$errors['con'] ='Connection error';
	
}else{


    $qry="update appointment_detail set status='$status', time='$date' where appointment_id=$id";
    
    $result=$mysqli->query($qry);
    
    if($result == true){
    
    $data['msg']='Appointment id:'.$id.' is successfully updated';
    
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