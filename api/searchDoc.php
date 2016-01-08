<?php
$errors = array();
$data = array();
// Getting posted data and decodeing json
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);

//$user_name=$request->userName;

$lat=$request->lat;
$lon=$request->lon;
$rad=$request->rad;
$spec=$request->spec;
require_once 'connection.php';

$mysqli=new mysqli($localhost,$user,$password,$db);

if($mysqli->connect_error > 0){
	
	$errors['con'] ='Connection error';
	
}else{


    $qry="SELECT doctor_id,( 6371 * acos( cos( radians($lat) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians($lon) ) + sin( radians($lat) ) * sin( radians( lat ) ) ) ) AS distance FROM doctor_address HAVING distance < 25 ORDER BY distance LIMIT 0 , 20;";
    
    $result=$mysqli->query($qry);
    
    if($result == true){
    $row=NULL;
     
    while($row=$result->fetch_array(MYSQLI_NUM)){
    
    $qry2="select d.doctor_id,d.address,s.details
    from doctor_address d, specialist s
    where d.doctor_id='$row[0]' and d.doctor_id=s.doctor_id and s.speciality='$spec'";
    $result2=$mysqli->query($qry2);
    
  
    $row1=$result2->fetch_array(MYSQLI_NUM);  
    if($row1)
    $data[]=$row1;
    
 
    }
    }else{
    
    $errors['error']='database error';
    $errors['dataerror']=$user . $lat.'' .$lon;
    }

$mysqli->close();
}

/*if (empty($errors)) {
     $data['success'] = true;
//    $data['message'] = 'Form data is going well';
  
} else {
    $data['success'] = false;
    $data['errors']  = $errors;
   
}*/


echo json_encode($data);
?>