<?php
    require_once "connection.php";
    try{
        $qry = "SELECT * FROM passwords";
        $stmt = $conn->prepare($qry);
        $stmt->execute();
        $result = $stmt->get_result();
        $data = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);
    } catch (Exception $e){
        die($conn->error);
    } finally{
        $conn->close();
    }
?>