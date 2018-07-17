let keyDownListener = function (event) {
    Animation(event.key);
}

document.addEventListener("keydown", keyDownListener);

$(function(){
    $(".button").on("click", function () {
        let that = $(this);
        Animation($(this).attr("id"));
        $(this).animateCss("wobble", function () {
            $(that).removeClass("wobble");
        });
    });
});
