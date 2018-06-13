window.onload = function () {
    document.getElementById("nav-menu").addEventListener("click", navMenu);
    carousel();
}

function navMenu() {
    var display = document.getElementById("nav-collapse").style.display;
    if (display == "block") {
        document.getElementById("nav-collapse").style.display = "none";
    } else {
        document.getElementById("nav-collapse").style.display = "block";
    }
}

var indexImg = 0;

function carousel() {
    var i;
    var img = document.getElementsByClassName("carousel__img");
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    indexImg++;
    if (indexImg >= img.length) {
        indexImg = 0;
    }
    img[indexImg].style.display = "block";
}

function prevImg() {
    var img = document.getElementsByClassName("carousel__img");
    img[indexImg].style.display = "none";
    indexImg--;
    if(indexImg == -1) {
        indexImg = img.length - 1;
    }
    img[indexImg].style.display = "block";
}

function nextImg() {
    var img = document.getElementsByClassName("carousel__img");
    img[indexImg].style.display = "none";
    indexImg++;
    if(indexImg == img.length) {
        indexImg = 0;
    }
    img[indexImg].style.display = "block";
}