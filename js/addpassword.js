
$("#toggle-password").click(function(){
    const passwordInput = $('#password');
    const icon = $(this); 

    if (passwordInput.attr('type') === 'password') {
        passwordInput.attr('type', 'text');
        icon.removeClass('bi-eye-slash')
        icon.addClass('bi-eye');
    } else {
        passwordInput.attr('type', 'password'); 
        icon.removeClass('bi-eye')
        icon.addClass('bi-eye-slash');
    }
});

var form_hidden=true;
$("#add-password-btn").click(()=>{
    if(form_hidden){
        $("#add-passwords").removeClass("d-none");
        $("#passwords-display").addClass("d-none");
        form_hidden=false;
    } else{
        $("#passwords-display").removeClass("d-none");
        $("#add-passwords").addClass("d-none");
        form_hidden=true;
    }
})

$("#password-form").submit((e)=>{
    e.preventDefault();
    let appname = $("#app-name").val();
    let url = $("#url").val();
    let username = $("#username").val();
    let password = $("#password").val();
    let note = $("#note").val();
    let check = $("#favourite").val();
    let favourite="no";
    if(check=='on'){
        favourite="yes";
    }
    let isError=false;
    if(appname==""){
        $("#app-name-error").text("Please enter the app name");
        isError=true;
    }else{
        $("#app-name-error").text("");
    }
    if(username==""){
        $("#username-error").text("Please enter the username");
        isError=true;
    }else{
        $("#username-error").text("");
    }
    if(password==""){
        $("#password-error").text("Please enter the password");
        isError=true;
    }else{
        $("#password-error").text("");
    }
    if(!isError){
        $.ajax({
            url:"./../php/addpassword.php",
            method:"post",
            data:{
                name:appname,
                url:url,
                username:username,
                password:encryptPassword(password,username),
                note:note,
                favourite:favourite
            },
            success:(data)=>{
                try{
                    data= JSON.parse(data);
                    if(data['status']=='success'){
                        window.location="./../html/home.html";
                    }
                } catch(error){
                    console.log(error);
                    console.log(data);
                }
            }
        })
    }
})