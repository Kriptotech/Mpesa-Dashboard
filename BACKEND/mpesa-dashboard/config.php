<?php 
$database = 'mpesa-agent';
$server='localhost';
$user='root';
$pass='btcmoza';
$connect = mysqli_connect($server,$user,$pass,$database);
mysqli_set_charset($connect, "utf8mb4");



?>