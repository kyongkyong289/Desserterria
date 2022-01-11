function manageMapSelect() {
    displayMapSelect();
}

function displayMapSelect() {
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.font = "60px Opensans";

    context.clearRect(0, 0, 1024, 768);
    context.drawImage(img["Title"], 0, 0);

    context.fillStyle = "white";
    context.fillRect(UI.title.mapSelect.rect[0], UI.title.mapSelect.rect[1], UI.title.mapSelect.rect[2], UI.title.mapSelect.rect[3]);
    context.strokeRect(UI.title.mapSelect.rect[0], UI.title.mapSelect.rect[1], UI.title.mapSelect.rect[2], UI.title.mapSelect.rect[3]);

    for (var i = 0; i < 3; i++) {
        context.strokeRect(UI.title.mapSelect.mapList[i][0], UI.title.mapSelect.mapList[i][1], UI.title.mapSelect.mapList[i][2], UI.title.mapSelect.mapList[i][3]);
    }
}

function mouseUpMapSelect() {
    
}
