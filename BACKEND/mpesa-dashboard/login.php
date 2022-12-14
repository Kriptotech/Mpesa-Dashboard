<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();


$number = noHacking(isset($data['number'])?$data['number']:'');
$password = noHacking(isset($data['password'])?$data['password']:'');


$password_encoded = encodeHash($password);

$sql = "SELECT user.id,user.name,user.agent_code,user.bi,user.agent_number,user.pin_agent,user.birthday,user.isupervisor,user.email,user.isadmin,user.number,country.name as country,city.name as city,user.agent_code FROM user JOIN city ON user.city=city.id JOIN country ON user.country=country.id WHERE number='$number' AND password='$password_encoded'";
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
"city"=>$data['city'],
"agent_code"=>$data['agent_code'],
"bi"=>$data['bi'],
"agent_number"=>$data['agent_number'],
"country"=>$data['country'],
"city"=>$data['city'],
"birthday"=>$data['birthday'],
"agent_code"=>$data['agent_code'],
"pin_agent"=>$data['pin_agent'],
"isadmin"=>boolval($data['isadmin']),
"isupervisor"=>boolval($data['isupervisor']),

];


$i++;

}

echo json_encode(['response'=>true,'user'=>$j]);

}else{

  echo json_encode(['response'=>false,'user'=>[]]);

}




?>