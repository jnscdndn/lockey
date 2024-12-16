$(document).ready(()=>{
    // CALL DB AND GET ALL PASSWORDS
    $.ajax({
        url:"./../php/getallpasswords.php",
        method:"get",
        success:(data)=>{
            // console.log(data);
            try{
                data = JSON.parse(data);
                console.log(data);
            }catch(error){
                console.log(error);
                console.log(data);
                
            }
        }
    })
})

$("#favourite-passwords").click(()=>{
    $.ajax({
        url:"./../php/getfavouritepasswords.php",
        method:"get",
        success:(data)=>{
            try{
                data = JSON.parse(data);
                console.log(data);
            }catch(error){
                console.log(error);
                console.log(data);
                
            }
        }
    })
})

$("#all-passwords").click(()=>{
    // CALL DB AND GET ALL PASSWORDS
    $.ajax({
        url:"./../php/getallpasswords.php",
        method:"get",
        success:(data)=>{
            try{
                data = JSON.parse(data);
                console.log(data);
            }catch(error){
                console.log(error);
                console.log(data);
                
            }

        }
    })
})