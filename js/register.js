$('#register-form').submit(function(e) {
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let email = $("#email").val();
    let mobile = $("#mobile").val();
    let password = $("#password").val();
    let cnf_password = $("#cnf-password").val();
    
    iserror=false;

    if(fname==""){
        $('#fname-error').text("Please enter your first name");
        iserror=true;
    // }else if(fname.match(/[~`@#$%^&*()-_=+/?><,]/)){
    //     console.log(fname.match(/[~`!@#$%^&*()-_=+/?><,]/))
    //     $('#fname-error').text("Name can only contain alphabets and (.)");
    //     iserror=true;
    }else{
        $('#fname-error').text("");
    }

    if(lname==""){
        $('#lname-error').text("Please enter your last name");
        iserror=true;
    // }else if(lname.match(/[~`!@#$%^&*()-_=+/?><,]/)){
    //     console.log(lname.match(/[~`!@#$%^&*()-_=+/?><,]/))
    //     $('#lname-error').text("Name can only contain alphabets and (.)");
    //     iserror=true;
    }else{
        $('#lname-error').text("");
    }

    if(email==""){
        $('#email-error').text("Please enter your email");
        iserror=true;
    }else if(!email.match(/^[a-zA-Z0-9.]{3,}@[a-zA-Z]{3,12}.[a-zA-Z]{2,5}$/)){
        $('#email-error').text("Please enter a valid email");
        iserror=true;
    }else{
        $('#email-error').text("");
    }

    
    if(mobile==""){
        $('#mobile-error').text("Please enter your mobile number");
        iserror=true;
    }else if(!mobile.match(/^[6789]{1}[0-9]{9}$/)){
        $('#mobile-error').text("Please enter a valid mobile");
        iserror=true;
    }else{
        $('#mobile-error').text("");
    }

    if(password==""){
        $('#password-error').text("Please enter your password");
        iserror=true;
    }else if(!password.match(/[0-9]/) || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[@#$%^&*-_=+?/><]/)){
        $('#password-error').text("Password must sartisfy all the conditions");
        iserror=true;
    }else if(password.length<8){
        $('#password-error').text("password must be atleast 8 characters");
    }else{
        $('#password-error').text("");
    }
    
    if(cnf_password==""){
        $('#cnf-password-error').text("Please enter your cnf-password again");
        iserror=true;
    }else if(cnf_password != password){
        $('#cnf-password-error').text("Password and confirm password must be same");
        iserror=true;
    }else{
        $('#cnf-password-error').text("");
    }


    if(iserror){
        e.preventDefault();
    }
    
})