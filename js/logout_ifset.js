$(document).ready(()=>{
    $.ajax({
        url:"./../php/logout.php",
        method:"post",
        success:(data)=>{
            console.log("Logged Out", data);
            
        }
    })
})