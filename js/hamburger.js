let isNavOpen = false
let menu=$("#nav-bar-contents-mobile")
$("#mobile-nav-icon-holder").click(function(){
    if(isNavOpen){
        menu.slideToggle(function(){
            // console.log("false")
            // $("#top-nav-bar-mobile").removeClass("bg-pink");
            // $("#mobile-nav-icon-holder div").addClass("bg-pink")
            // $("#mobile-nav-icon-holder div").removeClass("bg-beige")
            isNavOpen = false
        });
    }
    else{
        menu.slideToggle()
        // console.log("true")
        // $("#top-nav-bar-mobile").addClass("bg-pink")
        // $("#mobile-nav-icon-holder div").removeClass("bg-pink")
        // $("#mobile-nav-icon-holder div").addClass("bg-beige")
        isNavOpen = true
    }
})
menu.click(function(){
    menu.slideToggle()
    isNavOpen = false
})
