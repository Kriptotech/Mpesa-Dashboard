<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();

$iduser = noHacking(isset($data['iduser'])?$data['iduser']:'');
$floatype = noHacking(isset($data['floatype'])?$data['floatype']:'');
$quantity = noHacking(isset($data['quantity'])?$data['quantity']:'');





$datenormal = datenow();





    $sql= "INSERT INTO requestfloat (`iduser`,`floatype_id`,`quantity`,`date`) VALUES ('$iduser','$floatype','$quantity','$datenormal')";

    $query = mysqli_query($connect,$sql);
    if(mysqli_affected_rows($connect)==1){
      echo json_encode(true);
  
     
    }else{
      echo json_encode(false);
    }



  





?>