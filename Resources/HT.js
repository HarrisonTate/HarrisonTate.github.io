window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function openNav() {
    document.getElementById("myNav").style.display = "block";
}
    
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

function openInstaFrame(i) {
    document.getElementById("instaFrame").style.display = "block";
    var eachImg = ["BjFQmnjnFh_", "BjFQqXDHEIb", "BjFRERWHs3v", "BjHeSKwnP0x",  "Bh_ZcF_neiE", "BgTM2MpBrB5"];
    var imgSetter = "https://instagram.com/p/" + eachImg[i] + "/embed"
    document.getElementById("iframeCenter").src = imgSetter;
} 

function closeInstaFrame() {
    document.getElementById("instaFrame").style.display = "none";
} 
