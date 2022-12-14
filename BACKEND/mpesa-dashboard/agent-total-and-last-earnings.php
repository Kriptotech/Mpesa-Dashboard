<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();

$iduser = noHacking(isset($data['iduser'])?$data['iduser']:'');

function getLastearning($iduser){

global $connect;
$sql = "SELECT author_earning FROM weeklyearnings WHERE author='$iduser' order by id DESC";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

$data = mysqli_fetch_assoc($query);
$last = $data['author_earning'];
return $last;

}else{

  return 0;
}

}


$sql = "SELECT SUM(author_earning) FROM weeklyearnings WHERE author='$iduser'";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){

$data = mysqli_fetch_assoc($query);
$total = $data['SUM(author_earning)'];

echo json_encode(['total_earning'=>floatval($total),"last_earning"=>floatval(getLastearning($iduser))]);
}else{

  echo json_encode(['total_earning'=>0,"last_earning"=>floatval(getLastearning($iduser))]);;
}






?>