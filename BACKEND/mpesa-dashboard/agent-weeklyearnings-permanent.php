<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();


$iduser = noHacking(isset($data['iduser'])?$data['iduser']:'');



$sql = "SELECT weeklyearningsnotdelete.id,weeklyearningsnotdelete.date,weeklyearningsnotdelete.earnings,weeklyearningsnotdelete.author_earning,user.name,user.number,user.agent_code,city.name as city FROM weeklyearningsnotdelete JOIN user ON weeklyearningsnotdelete.author = user.id JOIN city ON user.city=city.id WHERE weeklyearningsnotdelete.author='$iduser' order by weeklyearningsnotdelete.id DESC";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

$i=0;
$j=[];

while($data=mysqli_fetch_assoc($query)){

$j[$i]=[

"id"=>$data['id'],
"date"=>$data['date'],
"earning"=>$data['earnings'],
"agent_earning"=>$data['author_earning'],
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