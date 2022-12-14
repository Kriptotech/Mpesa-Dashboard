<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();

$iduser = noHacking(isset($data['iduser'])?$data['iduser']:'');

$sql = "SELECT requestfloat.id,requestfloat.quantity,requestfloat.date,requestfloat.isconfirm,user.name as agent_name,floatype.name as floatype FROM requestfloat JOIN user ON requestfloat.iduser=user.id JOIN floatype ON requestfloat.floatype_id=floatype.id WHERE requestfloat.iduser='$iduser' order by requestfloat.id ASC";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

$i=0;
$j=[];

while($data=mysqli_fetch_assoc($query)){

$j[$i]=[

"id"=>intval($data['id']),
"agent_name"=>$data['agent_name'],
"floatype"=>$data['floatype'],
"quantity"=>$data['quantity'],
"date"=>$data['date'],
"isconfirm"=>boolval($data['isconfirm']),


];


$i++;

}

echo json_encode($j);

}else{

  echo json_encode([]);

}




?>