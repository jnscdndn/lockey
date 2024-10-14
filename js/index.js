let isNavOpen = false
let menu=$("#nav-bar-contents-mobile")
$("#mobile-nav-icon-holder").click(function(){
    if(isNavOpen){
        menu.slideToggle(function(){
            $("#top-nav-bar-mobile").removeClass("bg-pink");
            $("#mobile-nav-icon-holder div").addClass("bg-pink")
            $("#mobile-nav-icon-holder div").removeClass("bg-beige")
            isNavOpen = false
        });
    }
    else{
        menu.slideToggle()
        $("#top-nav-bar-mobile").addClass("bg-pink")
        $("#mobile-nav-icon-holder div").removeClass("bg-pink")
        $("#mobile-nav-icon-holder div").addClass("bg-beige")
        isNavOpen = true
    }
})
menu.on('touchend',function(){
    menu.slideToggle(function(){
        $("#top-nav-bar-mobile").removeClass("bg-pink");
        $("#mobile-nav-icon-holder div").addClass("bg-pink")
        $("#mobile-nav-icon-holder div").removeClass("bg-beige")
        isNavOpen = false
    });
})
