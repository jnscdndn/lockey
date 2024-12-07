<?php
require_once 'src/PHPMailer.php';
require_once 'src/SMTP.php';
require_once 'src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function sendOTP($email, $otp) {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'lockey.pass@gmail.com'; // Replace with your SMTP email
        $mail->Password = 'jrevsbegjkpwmsep'; // Use app password here
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipient
        $mail->setFrom('your-email@gmail.com', 'Your App Name');
        $mail->addAddress($email); // Pass the actual email address here

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'Your OTP';
        $mail->Body = "<h1>Your OTP: {$otp}</h1>";

        $mail->send();
        return "success";
    } catch (Exception $e) {
        return "error";
    }
}
?>
