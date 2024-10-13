let isNavOpen = false
$("#mobile-nav-icon-holder").click(function(){
    $("#nav-bar-contents-mobile").slideToggle();
    if(isNavOpen){
        $("#top-nav-bar-mobile").removeClass("bg-pink");
        $("#mobile-nav-icon-holder div").addClass("bg-pink")
        $("#mobile-nav-icon-holder div").removeClass("bg-beige")
        isNavOpen = false
    }
    else{
        $("#top-nav-bar-mobile").addClass("bg-pink");
        $("#mobile-nav-icon-holder div").removeClass("bg-pink")
        $("#mobile-nav-icon-holder div").addClass("bg-beige")
        isNavOpen = true
    }
})