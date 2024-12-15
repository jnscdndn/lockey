$(document).ready(()=>{
    // CALL DB AND GET ALL PASSWORDS
    $.ajax({
        url:"./../php/getallpasswords.php",
        method:"get",
        success:(data)=>{
            console.log(data);
        }
    })
})

