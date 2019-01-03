function openInstaFrame(i) {
    document.getElementById("instaFrame").style.display = "block";
    var imgSetter = "https://instagram.com/p/" + i + "/embed"
    document.getElementById("iframeCenter").src = imgSetter;
} 
function openNav() {
    document.getElementById("myNav").style.display = "block";
}  
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
function closeInstaFrame() {
    document.getElementById("instaFrame").style.display = "none";
} 
