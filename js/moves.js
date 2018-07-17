let Animation = function(animateDirection){
    let fadeDirection;
    if(animateDirection === keycodes.ArrowDown){
        fadeDirection = "fadeOutUp";
    }
    else if(animateDirection === keycodes.ArrowUp){
        fadeDirection = "fadeOutDown";
    }
    else if(animateDirection === keycodes.ArrowLeft){
        fadeDirection = "fadeOutRight";
    }
    else if(animateDirection === keycodes.ArrowRight){
        fadeDirection = "fadeOutLeft";
    }

    let hidden = $(".hidden");
    let shown = $(".shown");
    
    $(hidden).css('background-image', 'url(' + randomImageUrl(shown) + ')');
    document.removeEventListener("keydown", keyDownListener);

    $(shown).animateCss(fadeDirection, function(){
        $(shown).removeClass("animated");
        $(shown).removeClass(fadeDirection);
        document.addEventListener("keydown", keyDownListener);      
    });

    setTimeout(function(){
        $(hidden).switchClass("hidden", "shown");
        $(shown).switchClass("shown", "hidden");
    }, 500);
}