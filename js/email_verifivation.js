$("#send_otp").click(function(){
    let email=$("#email").val();
    $.ajax({
        url:"",
        method:"POST",
        data:{
            email:email
        },
        success:function(data){

        }
    })
})