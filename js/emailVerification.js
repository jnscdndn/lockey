let otpSend=false;
let otp;
let verified=false;
$("#send_otp").click(function () {
    let email = $("#email").val();
    console.log(email);
    if (email === "") {
        $("#email-error").text("Please enter an email");
        return;
    }
    if (!email.match(/^[a-zA-Z0-9.]{3,}@[a-zA-Z]{3,12}\.[a-zA-Z]{2,5}$/)) {
        $("#email-error").text("Please enter a valid email");
        return;
    }
    $("#email-error").text("");
    let length=6
    let num=Math.random()
    otp=Math.floor(Math.pow(10,length-1)+num*(Math.pow(10,length)-1))
    $.ajax({
        url: "./../php/emailVerification.php",
        method: "POST",
        data: {
            email: email,
            otp:otp
        },
        success: function (data) {
            console.log(data);
            data = JSON.parse(data);
            if (data['status'] === "success") {
                otpSend=true
                $("#send_otp").text("Otp Sent");
                startTimer();
            } else{
                $("#email-error").text("Email already exists");
            }
        }
    });
});

function startTimer() {
    const btn = $("#send_otp");
    let timeLeft = 60; 

    btn.prop("disabled", true).css({
        // "background-color": "#fad6cf",
        "cursor": "not-allowed",
        // "border-color": "#ff9b8a"
    });


    const interval = setInterval(() => {
        timeLeft--;
        btn.text(`Resend in ${timeLeft}s`);
        btn.removeClass("back-prime")
        btn.removeClass("txt-primary-white")

        btn.addClass("back-prime-secondary")
        btn.addClass("txt-primary-dark")

        if (timeLeft <= 0) {
            clearInterval(interval); 
            btn.prop("disabled", false).text("Resend OTP")
        }
    }, 1000);
}


$("#verify").click(()=>{
    if(otpSend){
        if ($("#otp").val()==otp){
            console.log("enter");
            
            $("#verify").text("Verified")
            $("#verify").removeClass("back-prime")
            $("#verify").removeClass("txt-primary-white")

            $("#verify").addClass("back-prime-secondary")
            $("#verify").addClass("txt-primary-dark")
            


            $("#send_otp").removeClass('back-prime')
            $("#send_otp").removeClass("txt-primary-white")

            $("#send_otp").addClass("back-prime-secondary")
            $("#send_otp").addClass("txt-primary-dark")


            $("#send_otp").prop("disabled", true).css({
                "cursor": "not-allowed",
            });
            $("#verify").prop("disabled", true).css({
                "cursor": "not-allowed",
            });
            $("#email").prop("readonly", true).css({
                "cursor": "not-allowed",
            });
            $("#otp").prop("disabled", true).css({
                "cursor": "not-allowed",
            });  
            verified=true;
        }
    }
})
