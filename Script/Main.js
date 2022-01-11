window.onload = main;

function main() {
    canvas = document.getElementById("game");
    context = canvas.getContext("2d");
    canvasRect = canvas.getBoundingClientRect();

    imageLoad();
    
    canvas.addEventListener("mouseup", mouseUpHandle, false);
    window.addEventListener("keydown", keyDownHandle, false);
    window.addEventListener("keyup", keyUpHandle, false);
    
    setInterval(update, Math.floor(1000 / FPS));
}

function update() {
    if (scene === "Title") {
        manageTitle();
    } else if (scene === "MapSelect") {
        manageMapSelect();
    } 
}

function mouseUpHandle(event) {
    mouse.up.x = event.clientX - canvasRect.left;
    mouse.up.y = event.clientY - canvasRect.top;
    
    if (scene === "Title") {
        mouseUpTitle();
    } else if (scene === "MapSelect") {
        mouseUpMapSelect();
    }
}

function keyDownHandle(event) {

}

function keyUpHandle(event) {

}
