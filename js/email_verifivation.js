$("#send_otp").click(function(){
    let email=$("#email").val();
    // const otp = getotp();
    $.ajax({
        url:"./../php/email_verification.php",
        method:"POST",
        data:{
            email:email
        },
        success:function(data){
            data = JSON.parse(data);
            if(data['status']=="success"){
                $("#send_otp").text("Otp Sent");
                $("#email").prop('disabled', true);
            }
            else{
                console.log(data);
                
            }
            
            
        }
    })
})

function getotp(){
    return 1234;
}