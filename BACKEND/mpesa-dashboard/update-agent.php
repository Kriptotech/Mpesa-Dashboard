<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();


$id = noHacking(isset($data['id'])?$data['id']:'');
$name = noHacking(isset($data['name'])?$data['name']:'');
$email = noHacking(isset($data['email'])?$data['email']:'');
$number = noHacking(isset($data['number'])?$data['number']:'');



// $sql = "SELECT * FROM user WHERE number='$number'";
// $query = mysqli_query($connect,$sql);

// if(mysqli_num_rows($query)>0){

// echo json_encode(["response"=>false,"response_text"=>"number-exist"]);

// }else{


  $sql = "UPDATE `user` SET `name` = '$name', `email` = '$email', `number` = '$number' WHERE `user`.`id` = '$id'";
  $query = mysqli_query($connect,$sql);
  
  if(mysqli_affected_rows($connect)==1){
  
  $sql = "SELECT * FROM user WHERE id='$id'";
  $query = mysqli_query($connect,$sql);
  
  if(mysqli_num_rows($query)>0){
  
     $i=0;
    $j=[];
    
    while($data=mysqli_fetch_assoc($query)){
    
    $j[$i]=[
    
    "id"=>$data['id'],
    "name"=>$data['name'],
    "email"=>$data['email'],
    "number"=>$data['number'],
    
    
    ];
    
    
    $i++;
    
    }
    
    echo json_encode(['response'=>true,'user'=>$j]);
  }
  
  
  
  
  }else{
  
    echo json_encode(['response'=>false,'response_text'=>'eror-update-user']);
  
  }
  
  
  
// }




?>