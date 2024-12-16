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

$("#favourite-passwords").click(()=>{
    $.ajax({
        url:"./../php/getfavouritepasswords.php",
        method:"get",
        success:(data)=>{
            console.log(data);
        }
    })
})