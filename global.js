function setWidth(id, width) {
    document.getElementById(id).style.width = width + "px";
}

function getWidth(id){
    var element = document.getElementById(id);
    var positionInfo = element.getBoundingClientRect();
    return positionInfo.width;
}