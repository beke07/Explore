let MoveDown = function(){
    let change = $(".change");
    let init = $(".init");
    
    $(init).hide("blind", { direction:"up" }, function(){
        $(change).addClass("init");
        $(change).removeClass("change");
    
        $(init).addClass("change");
        $(init).removeClass("init");
    });
};

let MoveUp = function(){
    console.log("Felfelé mozgás");
};

let MoveLeft = function(){
    console.log("Balra mozgás");
};

let MoveRight = function(){
    console.log("Jobbra mozgás");
};