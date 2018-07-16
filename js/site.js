document.addEventListener("keydown", function(event) {
    if(event.key == keycodes.ArrowDown){
        MoveDown();
    }
    else if(event.key == keycodes.ArrowUp){
        MoveUp();
    }
    else if(event.key == keycodes.ArrowLeft){
        MoveLeft();
    }
    else if(event.key == keycodes.ArrowRight){
        MoveRight();
    }
});