<?php 
    echo"Hello";
    if(!isset($_POST['register'])){
        header("location:./../html/register.html");
    }
    require_once "connection.php";
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $password = $_POST['password'];
    try{
        $qry = "INSERT INTO users(first_name,last_name,email,mobile,password) VALUES(?,?,?,?,?)";
        $stmt = $conn->prepare($qry);
        $stmt->bind_param("sssis",$fname,$lname,$email,$mobile,$password);
        $status = $stmt->execute();
        if($status){
            header("location:./../html/login.html");
        } else{
            ?>
                <script>
                    alert("Some error has occured");
                    window.location="./../html/register.html";
                </script>
            <?php
        }
        
    } catch (Exception $e){
        die($conn->error);
    } finally{
        echo json_encode($data);
    }
?>