<?php
$errors = array();
$data = array();
// Getting posted data and decodeing json
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);

$user_name=$request->userName;
$sp=$request->speciality;
$detail=$request->detail;

require_once 'connection.php';

$mysqli=new mysqli($localhost,$user,$password,$db);

if($mysqli->connect_error > 0){
	
	$errors['con'] ='Connection error';
	
}else{


    $qry="insert into specialist values('$user_name','$sp','$detail')";
    
    $result=$mysqli->query($qry);
    
    if($result == true){
    
    $data['msg']='Profile successfully updated';
    
    }else{
    
    $errors['error']='database error';
    
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