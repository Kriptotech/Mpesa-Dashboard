<?php 
include 'vendor/autoload.php';
include 'sdkPay/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use ExpoSDK\Expo;
use ExpoSDK\ExpoMessage;


$key = "deny_celestino_844505131_kajdbksjdkasbdaksdjakdskj";

function datenow(){
  return date('Y-m-d H:i:s');
}
function datesimple(){
  return date('Y-m-d');
}
function noHacking($input){
  global $connect;
   $var= mysqli_escape_string($connect, $input);
    $var= htmlspecialchars($var);
  return $var;
}
function jsonHeader(){
  header("Access-Control-Allow-Origin:*");
  header("Content-type: application/json");
} 

function encodeHash($hash){
  global $key;
  return JWT::encode($hash, $key, 'HS256');
}


function decodeHash($value){
global $key;
return JWT::decode($value, new Key($key, 'HS256'));
}



?>



