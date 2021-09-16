function setWidth(id, width) {
    document.getElementById(id).style.width = width + "px";
}

function getWidth(id){
    var element = document.getElementById(id);
    var positionInfo = element.getBoundingClientRect();
    return positionInfo.width;
}
function getHeight(id){
    var element = document.getElementById(id);
    var positionInfo = element.getBoundingClientRect();
    return positionInfo.height;
}

function mobileCheck() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if (width < height) {
        location.replace("mobile.html");
    }
}

function mobileCheck2() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if (width > height) {
        location.replace("index.html");
    }
}
