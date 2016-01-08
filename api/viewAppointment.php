<?php
$errors = array();
$data = array();
// Getting posted data and decodeing json
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);



$doc=$request->userName;

require_once 'connection.php';

$mysqli=new mysqli($localhost,$user,$password,$db);

if($mysqli->connect_error > 0){
	
	$errors['con'] ='Connection error';
	
}else{


    $qry="select * from appointment_detail where specialist='$doc'";
    
     $result=$mysqli->query($qry);

        if($result==true){
            $row='';
            while( $row=$result->fetch_array(MYSQLI_NUM)){
            
            if($row)
            $data[]=$row;
            }
            
        }else{
            
            $error['sql']='query error';



        }
    

$mysqli->close();
}
/*
if (empty($errors)) {
     $data['success'] = true;
//    $data['message'] = 'Form data is going well';
  
} else {
    $data['success'] = false;
    $data['errors']  = $errors;
   
}*/


echo json_encode($data);
?>