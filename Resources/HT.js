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

var i;

var eachImg = ["BjFQmnjnFh_", "BjFQqXDHEIb", "BjFRERWHs3v", "BjHeSKwnP0x",  "Bh_ZcF_neiE", "BgTM2MpBrB5"];
function openInstaFrame(i) {
    document.getElementById("instaFrame").style.display = "block";
    var imgSetter = "https://instagram.com/p/" + eachImg[i] + "/embed"
    document.getElementById("iframeCenter").src = imgSetter;
} 
function closeInstaFrame() {
    document.getElementById("instaFrame").style.display = "none";
} 

    // 0 BjFQmnjnFh_ red/crane-r9-min.jpg
    // 1 BjFQqXDHEIb green/DSC_0206.jpg
    // 2 BjFRERWHs3v green/jjj.jpg   
    // 4 Bh_ZcF_neiE img/red/bloody-york-at-2-min.jpg
    // 5 BgTM2MpBrB5 img/green/DSC_0976.jpg

