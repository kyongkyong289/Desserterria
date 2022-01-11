function manageTitle() {
    displayTitle();
}

function displayTitle() {
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.font = "60px Opensans";

    context.clearRect(0, 0, 1024, 768);
    context.drawImage(img['Title'], 0, 0);
}

function mouseUpTitle() {
    scene = "MapSelect";
}
