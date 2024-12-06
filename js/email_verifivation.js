$("#send_otp").click(function(){
    let email=$("#email").val();
    
    if(email===""){
        $("#email-error").text("Please enter an email");
    }else if(!email.match(/^[a-zA-Z0-9.]{3,}@[a-zA-Z]{3,12}.[a-zA-Z]{2,5}$/)){
        $("#email-error").text("Please enter a valid email");
    } else{
        $("#email-error").text("");
        $.ajax({
            url:"./../php/email_verification.php",
            method:"POST",
            data:{
                email:email
            },
            success:function(data){
                data = JSON.parse(data);
                if(data['status']=="success"){
                    console.log("HERE");
                    
                    $("#send_otp").text("Otp Sent");
                    $("#email").prop('disabled', true);
                }
                else{
                    console.log(data);
                    
                }
 
            }
        })
    }
})

function getotp(){
    return 1234;
}