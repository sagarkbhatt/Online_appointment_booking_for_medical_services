<?php
$errors = array();
$data = array();
// Getting posted data and decodeing json
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);

$username=$request->user_name;
$name=$request->name;
$add=NULL;
$img=NULL;
$ph=$request->ph;
$email=$request->email;
$pwd=$request->pwd;
$type=$request->typeuser;    

// checking for blank values.
if (empty($username))
  $errors['username'] = 'Username is required.';

if (empty($name))
  $errors['name'] = 'Name is required.';

if (empty($email))
  $errors['email'] = 'Email is required.';

if (empty($ph))
  $errors['ph'] = 'Phone is required.';

if (empty($pwd))
  $errors['pwd'] = 'Password is required.';

if (empty($type))
  $errors['type'] = 'Please select type of user.';



// response back.




//$mysqli=new mysqli('localhost','root','sagar','medical');
require_once 'connection.php';
$mysqli=new mysqli($localhost,$user,$password,$db);

if($mysqli->connect_error > 0){
	
	$errors['con'] ='Connection error';
	
}
else{
    $queryDetail=NULL;
    $queryLogin=NULL;
    //session_start();
    if(strcmp($type,'client')==0){
        
      //  $_SESSION['user']='client';
    $queryDetail="insert into client_master values('$username','$name','$add','$ph','$email') ";
    $queryLogin="insert into client_login values('$username','$pwd')";
    
    }
    else if(strcmp($type,'doctor')==0){
        //$_SESSION['user']='doctor';
    $queryDetail="insert into doctor_master values('$username','$name','$ph','$email','$img') ";
    $queryLogin="insert into doctor_login values('$username','$pwd')";
    }
    //$data['session']=$_SESSION['user'];
   try{

       $mysqli->autocommit(FALSE);
       $query=$mysqli->query($queryDetail);
          
       $query1=$mysqli->query($queryLogin);
    if($query == true and $query1 == true){

        
        $mysqli->commit();

        $data['message'] = 'Registered successfully';
            
    }else{
        
        $mysqli->rollback();
            
         throw new Exception($mysqli->error);
    }
   }catch(Exception $e){
   
       $mysqli->rollback();
   
   $errors['exception'] = 'Database, error '. $e->getMessage();
    
    //  print_r($e->getMessage());
//    exit();
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