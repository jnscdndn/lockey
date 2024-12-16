// Toggle passwrd view
$("#updated-toggle-password").click(function(){
    const passwordInput = $('#updated-password');
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
populateDetails=(element)=>{
    // $("#passwords-display").addClass("d-none");
    $("#update-password").removeClass("d-none");
    $.ajax({
        url:"./../php/getpassworddetails.php",
        method:"post",
        data:{
            id:id
        },
        success:(data)=>{
            try{
                data= JSON.parse(data);
                if(data['status']=='success'){
                    data=data.data;
                    console.log(data);
                    $("#updated-app-name").val(data['name']);
                    $("#updated-url").val(data['url']);
                    $("#updated-username").val(data['username']);
                    $("#updated-password").val(decryptPassword(data['password'],data['username']));
                    $("#updated-note").val(data['note']);
                    if (data['favourite'] === "yes") {
                        $('#updated-favourite').prop('checked', true); // Check the checkbox
                    } else if (value === "no") {
                        $('#updated-favourite').prop('checked', false); // Uncheck the checkbox
                    }
                } else{
                    console.log("error");
                }
            }catch(error){
                console.log(error);
                console.log(data);
                
            }
        }
    })
}
populateDetails(14);

