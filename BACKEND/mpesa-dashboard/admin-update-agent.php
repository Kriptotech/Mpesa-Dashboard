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
$agent_name = noHacking(isset($data['agent_name'])?$data['agent_name']:'');
$pin_agent = noHacking(isset($data['pin_agent'])?$data['pin_agent']:'');
$agent_number = noHacking(isset($data['agent_number'])?$data['agent_number']:'');
$bi = noHacking(isset($data['bi'])?$data['bi']:'');
$city = noHacking(isset($data['city'])?$data['city']:'');
$country = noHacking(isset($data['country'])?$data['country']:'');
$agent_code = noHacking(isset($data['agent_code'])?$data['agent_code']:'');
$status = noHacking(isset($data['status'])?$data['status']:'');




if($status=='update'){

$sql = "UPDATE `user` SET `name` = '$name', `agent_name` = '$agent_name', `email` = '$email', `bi` = '$bi', `number` = '$number', `agent_number` = '$agent_number', `agent_code` = '$agent_code', `pin_agent` = '$pin_agent' WHERE `user`.`id` = '$id'";
  $query = mysqli_query($connect,$sql);
  
  if(mysqli_affected_rows($connect)==1){
  
    echo json_encode(true);
  }else{
  
    echo json_encode(false);
  
  }
  


}else if($status=='delete'){



  $sql = "DELETE FROM user WHERE id='$id'";
  $query = mysqli_query($connect,$sql);
  
  if(mysqli_affected_rows($connect)==1){
  
    echo json_encode('deleted');
  }else{
  
    echo json_encode('error-on-delete');
  
  }


}else{
echo json_encode('request-without-status');

}



  





?>