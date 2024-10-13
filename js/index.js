let isNavOpen = false
$("#mobile-nav-icon-holder").click(function(){
    
    if(isNavOpen){
        $("#nav-bar-contents-mobile").slideToggle(function(){
            $("#top-nav-bar-mobile").removeClass("bg-pink");
            $("#mobile-nav-icon-holder div").addClass("bg-pink")
            $("#mobile-nav-icon-holder div").removeClass("bg-beige")
            isNavOpen = false
        });
    }
    else{
        $("#nav-bar-contents-mobile").slideToggle()
        $("#top-nav-bar-mobile").addClass("bg-pink");
        $("#mobile-nav-icon-holder div").removeClass("bg-pink")
        $("#mobile-nav-icon-holder div").addClass("bg-beige")
        isNavOpen = true
    }
})


