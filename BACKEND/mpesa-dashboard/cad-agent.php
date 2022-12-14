<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();

$name = noHacking(isset($data['name'])?$data['name']:'');
$agent_name = noHacking(isset($data['agent_name'])?$data['agent_name']:'');
$email = noHacking(isset($data['email'])?$data['email']:'');
$bi = noHacking(isset($data['bi'])?$data['bi']:'');
$agent_number = noHacking(isset($data['agent_number'])?$data['agent_number']:'');
$birthday = noHacking(isset($data['birthday'])?$data['birthday']:'');
$pin_agent = noHacking(isset($data['pin_agent'])?$data['pin_agent']:'');
$number = noHacking(isset($data['number'])?$data['number']:'');
$country = noHacking(isset($data['country'])?$data['country']:'');
$city = noHacking(isset($data['city'])?$data['city']:'');
$agent_code = noHacking(isset($data['agent_code'])?$data['agent_code']:'');
$initial_investment = noHacking(isset($data['initial_investment'])?$data['initial_investment']:'');
$password = noHacking(isset($data['password'])?$data['password']:'');


$password_encode = encodeHash($password);

$datenormal = datesimple();
$datecreated = datenow();


$sql = "SELECT * FROM user WHERE agent_code='$agent_code' or number='$number'";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

  echo json_encode(['status'=>false,'status_text'=>'user-exist']);


}else{

$sql= "INSERT INTO user (`name`,`agent_name`,`email`,`bi`,`number`,`agent_number`,`country`,`city`,`birthday`,`date_created`,`agent_code`,`password`,`pin_agent`) VALUES ('$name','$agent_name','$email','$bi','$number','$agent_number','$country','$city','$birthday','$datecreated','$agent_code','$password_encode','$pin_agent')";

$query = mysqli_query($connect,$sql);
if(mysqli_affected_rows($connect)==1){

 $sql  = "SELECT * FROM user WHERE number='$number'";
 $query = mysqli_query($connect,$sql);

 if(mysqli_num_rows($query)>0){
$data = mysqli_fetch_assoc($query);
$iduser = $data['id'];
 $sql = "INSERT INTO investment (`id_user`,`balance`) VALUES ('$iduser','$initial_investment')";
$query = mysqli_query($connect,$sql);

if(mysqli_affected_rows($connect)==1){

  echo json_encode(['status'=>true,'status_text'=>'user-added-success']);

}else{
  echo json_encode(['status'=>false,'status_text'=>'error-cad-intial-investment']);
}

 }else{
  echo json_encode(['status'=>false,'status_text'=>'user-not-found']);
 }
}else{
  echo json_encode(['status'=>false,'status_text'=>'error-cad-user']);
}

}




?>