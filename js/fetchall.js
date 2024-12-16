function copy_clipboard(password, event) {
    // Get the icon element
    const icon = event.target; // This is the <i> element that was clicked

    // Try using the modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(password)
            .then(() => changeIcon(icon)) // Change the icon if copy is successful
            .catch(() => fallbackCopy(password, event, icon)); // Fallback for older browsers
    } else {
        fallbackCopy(password, event, icon); // Fallback if Clipboard API is not available
    }
}

function fallbackCopy(password, event, icon) {
    // Create a temporary div element with contentEditable
    const tempDiv = document.createElement("div");
    tempDiv.textContent = password;
    tempDiv.style.position = "fixed"; // Prevent scrolling
    tempDiv.style.opacity = "0"; // Make it invisible
    tempDiv.style.height = "0"; // Avoid rendering
    tempDiv.style.width = "0"; // Avoid rendering
    document.body.appendChild(tempDiv);

    // Make the div editable and select the text
    tempDiv.contentEditable = true;
    tempDiv.focus();
    document.execCommand("selectAll");

    // Copy the text
    try {
        document.execCommand("copy");
        changeIcon(icon); // Change the icon if copy is successful
    } catch (err) {
        console.error("Fallback: Failed to copy password", err);
        alert("Failed to copy password. Please copy manually.");
    }

    // Clean up the temporary div
    document.body.removeChild(tempDiv);
}

function changeIcon(icon) {
    // Change the icon to clipboard-check-fill for 2 seconds
    icon.classList.remove("bi-copy");
    icon.classList.add("bi-clipboard-check-fill");

    // Restore the original icon after 2 seconds
    setTimeout(() => {
        icon.classList.remove("bi-clipboard-check-fill");
        icon.classList.add("bi-copy");
    }, 1000); // 2000 milliseconds = 2 secondsds
}



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
                str=`<div class="card-container d-flex flex-wrap p-2">`
                data.forEach(element=>{
                    str+=`
                    <div class="row col-12 col-md-6 col-lg-4 g-0 p-2">
                        <div class="row g-0 card-container-inner p-2">
                            <div class="col-2">
                                <i
                                    class="bi bi-file-lock2-fill display-1 txt-prime"></i>
                            </div>
                            <div class="col-8 ps-lg-3 my-auto">
                                <h5 class="m-0 text-truncate">${element.name}</h5>
                                <p class="m-0 text-truncate" style="max-width: 100%;">${element.email}</p>
                            </div>
                            <div class="col-2  my-auto text-end p-2">
                                <i class="bi bi-copy fs-3 txt-prime" onclick="copy_clipboard('${decryptPassword(element.password,element.username)}', event)"></i>
                            </div>
                        </div>
                    </div>
                    `
                })
                str+=`</div>`
                $("#passwords-display").html(str)
                $("#all-passwords").addClass("scrollable-content-clicked")
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
                str=`<div class="card-container d-flex flex-wrap p-2">`
                data.forEach(element=>{
                    str+=`
                     <div class="row col-12 col-md-6 col-lg-4 g-0 p-2">
                        <div class="row g-0 card-container-inner p-2">
                            <div class="col-2">
                                <i
                                    class="bi bi-file-lock2-fill display-1 txt-prime"></i>
                            </div>
                            <div class="col-8 ps-lg-3 my-auto">
                                <h5 class="m-0 text-truncate">${element.name}</h5>
                                <p class="m-0 text-truncate" style="max-width: 100%;">${element.email}</p>
                            </div>
                            <div class="col-2  my-auto text-end p-2">
                                <i class="bi bi-copy fs-3 txt-prime" onclick="copy_clipboard('${decryptPassword(element.password,element.username)}', event)"></i>
                            </div>
                        </div>
                    </div>
                    `
                })
                str+=`</div>`
                $("#passwords-display").html(str)
                $("#all-passwords").removeClass("scrollable-content-clicked")
                $("#favourite-passwords").addClass("scrollable-content-clicked")

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
                str=`<div class="card-container d-flex flex-wrap p-2">`
                data.forEach(element=>{
                    str+=`
                     <div class="row col-12 col-md-6 col-lg-4 g-0 p-2">
                        <div class="row g-0 card-container-inner p-2">
                            <div class="col-2">
                                <i
                                    class="bi bi-file-lock2-fill display-1 txt-prime"></i>
                            </div>
                            <div class="col-8 ps-lg-3 my-auto">
                                <h5 class="m-0 text-truncate">${element.name}</h5>
                                <p class="m-0 text-truncate" style="max-width: 100%;">${element.email}</p>
                            </div>
                            <div class="col-2  my-auto text-end p-2">
                                <i class="bi bi-copy fs-3 txt-prime" onclick="copy_clipboard('${decryptPassword(element.password,element.username)}', event)"></i>
                            </div>
                        </div>
                    </div>
                    `
                })
                str+=`</div>`
                $("#passwords-display").html(str)
                $("#favourite-passwords").removeClass("scrollable-content-clicked")
                $("#all-passwords").addClass("scrollable-content-clicked")

            }catch(error){
                console.log(error);
                console.log(data);
                
            }

        }
    })
})

