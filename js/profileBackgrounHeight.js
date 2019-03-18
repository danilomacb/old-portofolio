function profileBackgroundHeight() {
    var windowHeightLessMenu = document.documentElement.clientHeight - 50;

    document.getElementById("profileBackground").style.height = windowHeightLessMenu+"px";
}

window.onload = profileBackgroundHeight();