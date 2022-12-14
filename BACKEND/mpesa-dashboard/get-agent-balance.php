<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();

$id = noHacking(isset($data['id'])?$data['id']:'');



$sql = "SELECT user.balance FROM user WHERE id='$id'";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

$data = mysqli_fetch_assoc($query);
$balance = $data['balance'];

echo json_encode(['balance'=>$balance]);
}else{

  echo json_encode('user-id-not-found');
}






?>