<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();






$sql = "SELECT weeklyearnings.id,weeklyearnings.date,weeklyearnings.earnings,user.name,user.number,user.agent_code,city.name as city FROM weeklyearnings JOIN user ON weeklyearnings.author = user.id JOIN city ON user.city=city.id WHERE weeklyearnings.isconfirm=0;
";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

$i=0;
$j=[];

while($data=mysqli_fetch_assoc($query)){

$j[$i]=[

"id"=>$data['id'],
"date"=>$data['date'],
"earning"=>$data['earnings'],
"name_user"=>$data['name'],
"agent_code"=>$data['agent_code'],
"number"=>$data['number'],
"city"=>$data['city'],


];


$i++;

}

echo json_encode($j);

}else{

  echo json_encode([]);

}




?>