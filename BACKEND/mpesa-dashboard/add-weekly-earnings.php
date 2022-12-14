<?php 
include 'config.php';
include 'function.php';  
$url=file_get_contents('php://input');
$data=json_decode($url,true);
jsonHeader();

$iduser = noHacking(isset($data['iduser'])?$data['iduser']:'');
$earnings = noHacking(isset($data['earnings'])?$data['earnings']:'');



$useraccount=$earnings*45/100;
$companyaccount=$earnings*55/100;

function weeklyearningsnotdelete($datenormal,$datevalid,$earnings,$iduser,$useraccount){
global $connect;
  $sql= "INSERT INTO weeklyearningsnotdelete (`date`,`date_valid`,`earnings`,`author`,`author_earning`) VALUES ('$datenormal','$datevalid','$earnings','$iduser','$useraccount')";
  $query = mysqli_query($connect,$sql);
  if(mysqli_affected_rows($connect)==1){
  
  
   
  }else{
    echo json_encode("error-insert-earings-3");
  }

}

$datenormal = datesimple();
$day = 30;
$validate = date('Y-m-d', strtotime('+'.$day.'days', strtotime($datenormal)));

$sql ="SELECT * FROM weeklyearnings order by id ASC";
$query = mysqli_query($connect,$sql);

if(mysqli_num_rows($query)>0){


  $data = mysqli_fetch_assoc($query);
  $datevalid = $data['date_valid'];
     
  if($datenormal>=$datevalid){

   $sql = "DELETE FROM weeklyearnings";
   $query = mysqli_query($connect,$sql);


    $sql= "INSERT INTO weeklyearnings (`date`,`date_valid`,`earnings`,`author`,`author_earning`) VALUES ('$datenormal','$validate','$earnings','$iduser','$useraccount')";

    $query = mysqli_query($connect,$sql);
    if(mysqli_affected_rows($connect)==1){
      echo json_encode(true);
      weeklyearningsnotdelete($datenormal,$datevalid,$earnings,$iduser,$useraccount);
    $sql = "UPDATE company_account set wallet=wallet+$companyaccount";
    mysqli_query($connect,$sql);
    
    
     
    }else{
      echo json_encode("error-insert-earings-1");
    }



  }else{

    
  $sql= "INSERT INTO weeklyearnings (`date`,`date_valid`,`earnings`,`author`,`author_earning`) VALUES ('$datenormal','$datevalid','$earnings','$iduser','$useraccount')";

  $query = mysqli_query($connect,$sql);
  if(mysqli_affected_rows($connect)==1){
    echo json_encode(true);
    weeklyearningsnotdelete($datenormal,$datevalid,$earnings,$iduser,$useraccount);
  $sql = "UPDATE company_account set wallet=wallet+$companyaccount";
  mysqli_query($connect,$sql);
  
  
   
  }else{
    echo json_encode(false);
  }
  }
   

}else{


  
    
  $sql= "INSERT INTO weeklyearnings (`date`,`date_valid`,`earnings`,`author`,`author_earning`) VALUES ('$datenormal','$validate','$earnings','$iduser','$useraccount')";

  $query = mysqli_query($connect,$sql);
  if(mysqli_affected_rows($connect)==1){
    echo json_encode(true);
    weeklyearningsnotdelete($datenormal,$validate,$earnings,$iduser,$useraccount);
  $sql = "UPDATE company_account set wallet=wallet+$companyaccount";
  mysqli_query($connect,$sql);
  
  
   
  }else{
    echo json_encode("error-insert-earings-2");
  }



}









?>