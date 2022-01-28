const sign = document.getElementsByClassName("container");
const log = document.getElementsByClassName("wrapper");

sign[0].style.display = "none";

function signupage() {
    log[0].style.display = "none";
    sign[0].style.display = "block";
}

function loginpage() {
    log[0].style.display = "block";
    sign[0].style.display = "none";
}

