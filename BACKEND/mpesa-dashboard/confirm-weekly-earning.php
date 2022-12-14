<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();


$id = noHacking(isset($data['id'])?$data['id']:'');





  $sql = "UPDATE weeklyearnings SET isconfirm=1 WHERE id= '$id';";
  $query = mysqli_query($connect,$sql);
  
  if(mysqli_affected_rows($connect)==1){

    echo json_encode(true);

  }else{
    echo json_encode(false);

  }
  
  
  
  





?>