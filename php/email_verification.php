<?php 
    require_once "connection.php";
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        try{
            $qry = "SELECT * FROM users WHERE email=?";
            $stmt = $conn->prepare($qry);
            $stmt->bind_param("s",$email);
            $stmt->execute();
            $result = $stmt->get_result();
            $data=[];
            $data['status'] = "error";
            if($result->num_rows>0){
                $data['status'] = "error";
                $data['message'] = "Email is already in use";
            } else{
                $data['status'] = "success";
            }
        } catch (Exception $e){
            die($conn->error);
        } finally{
            echo $data;
            $conn->close();
        }
    }
?>