<?php 
    $HOST="localhost";
    $USER="root";
    $PASS="";
    $DBNAME="lockey";
    $conn = new mysqli($HOST,$USER,$PASS,$DBNAME,3306);
    if($conn->connect_error){
        die($conn->connect_error);
    }
?>