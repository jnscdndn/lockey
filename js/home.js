$(document).ready(()=>{
    // console.log("at home");
    
    $.ajax({
        url:"./../php/loggedincheck.php",
        method:"get",
        success:(data)=>{
            try{
                data = JSON.parse(data)
                if(data['status']=="success"){
                    $("#welcome-tag").text(`Hello ${data['name']}`)
                    
                } else{
                    window.location="./login.html";
                }
            } catch(error){
                console.log(error);
                console.log(data);
                
            }
            
        }
    })
    //getting all feature list
    $.ajax({
        url:"./../php/featureList.php",
        method:"get",
        success:(data)=>{
            try{
                data = JSON.parse(data)
                str=``
                data.forEach(element => {
                    str+=`<a href="${element.link}" class="txt-secondary-dark scrollable-content">${element.name}</a>`
                });
                console.log(str);
                $("#featureList").html(str)
                
            } catch(error){
                console.log(error);
            }
        }
    })
})