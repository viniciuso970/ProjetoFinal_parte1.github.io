window.onload=function(){
    document.getElementById("nav-menu").addEventListener("click", navMenu);
    //document.getElementById("nav-close").addEventListener("click", navClose);
}

function navMenu() {
    var display = document.getElementById("nav-collapse").style.display;
    if(display == "block") {
        document.getElementById("nav-collapse").style.display = "none";
    } else {
        document.getElementById("nav-collapse").style.display = "block";
    }
}