window.onscroll = function() {scrollFunction()};

document.addEventListener("DOMContentLoaded", function(){
    scrollFunction()
});

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "3px 10px";
        document.getElementById("title").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("title").style.fontSize = "35px";
    }
}