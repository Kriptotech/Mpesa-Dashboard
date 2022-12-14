<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();


function getAdmins(){
global $connect;

$sql = "SELECT * FROM user WHERE isadmin=1";
$query = mysqli_query($connect,$sql);
$total = mysqli_num_rows($query);

return $total;

}
function getAgents(){
global $connect;

$sql = "SELECT * FROM user WHERE isadmin=0 AND isupervisor=0";
$query = mysqli_query($connect,$sql);
$total = mysqli_num_rows($query);

return $total;

}
function getSupervisor(){
global $connect;

$sql = "SELECT * FROM user WHERE isupervisor=1";
$query = mysqli_query($connect,$sql);
$total = mysqli_num_rows($query);

return $total;

}



$sql = "SELECT user.id,user.name,user.email,user.number,user.bi,user.birthday,user.agent_name,user.pin_agent,user.agent_number,country.name as country,city.name as city,user.agent_code FROM user JOIN city ON user.city=city.id JOIN country ON user.country=country.id WHERE user.isadmin=0";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

$i=0;
$j=[];

while($data=mysqli_fetch_assoc($query)){

$j[$i]=[

"id"=>$data['id'],
"name"=>$data['name'],
"agent_name"=>$data['agent_name'],
"pin_agent"=>$data['pin_agent'],
"birthday"=>$data['birthday'],
"email"=>$data['email'],
"number"=>$data['number'],
"agent_number"=>$data['agent_number'],
"bi"=>$data['bi'],
"city"=>$data['city'],
"country"=>$data['country'],
"agent_code"=>$data['agent_code'],





];


$i++;

}

echo json_encode(["users"=>$j,"total_supervisor"=>getSupervisor(),"total_admin"=>getAdmins(),"total_agents"=>getAgents()]);

}else{

  echo json_encode(["users"=>[],"total_admin"=>getAdmins(),
  "total_agents"=>getAgents(),
  "total_supervisor"=>getSupervisor()]);

}




?>