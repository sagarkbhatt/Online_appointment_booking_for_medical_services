<?php
$errors = array();
$data = array();
require_once 'connection.php';
$mysqli=new mysqli($localhost,$user,$password,$db);
$qry='select name from speciality';
if($mysqli->connect_error > 0){
	
	$errors['con'] ='Connection error';
	
}else{

    

        $result=$mysqli->query($qry);

        if($result==true){
            $row='';
            while( $row=$result->fetch_array()){
            
            $data[]=$row['name'];
            }
            
        }else{
            
            $error['sql']='query error';



        }
    


}

/*if (empty($errors)) {
     $data['success'] = true;
    //$data['message'] = $db_pwd.' '.$u_pwd;
  
} else {
    $data['success'] = false;
    $data['errors']  = $errors;
   
}*/

echo json_encode($data);




?>