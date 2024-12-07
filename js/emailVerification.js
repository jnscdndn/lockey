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
    length=6
    num=Math.random()
    otp=Math.floor(Math.pow(10,length-1)+num*(Math.pow(10,length)-1))
    console.log(otp)
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
                $("#send_otp").text("Otp Sent");
                startTimer();
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

        if (timeLeft <= 0) {
            clearInterval(interval); 
            btn.prop("disabled", false).text("Resend OTP").css({
                "background-color": "#FF4522",
                "cursor": "pointer",
                "color": "#fff",
                "border-color": "#FF4522"
            });
        }
    }, 1000);
}
