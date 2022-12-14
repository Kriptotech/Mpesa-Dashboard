<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();



$sql = "SELECT * FROM company_account";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

$data = mysqli_fetch_assoc($query);
$balance = $data['wallet'];

echo json_encode(['wallet'=>$balance]);
}else{

  echo json_encode('error-get-company-wallet');
}






?>