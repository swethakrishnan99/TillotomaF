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

// password strength checker

const pswd = document.getElementById('reg-password')
const stnth = document.getElementById('snth')
stnth.style.display = "none"
let ucs, smcs, ing, scs;

pswd.addEventListener("keyup", event => {
    let upcs = 0
    let smlcs = 0
    let ingr = 0
    let spcs = 0
    var temp = 0
    let sum = 0
    var elmnt = event.target.value

    for (i = 0; i < elmnt.length; i++) {
        temp = elmnt.charCodeAt(i)
        /*console.log(temp)*/
        if (temp >= 65 && temp <= 90) {
            upcs = 1
        }
        else if (temp >= 97 && temp <= 122) {
            smlcs = 1
        }
        else if (temp >= 48 && temp <= 57) {
            ingr = 1
        }
        else if (temp >= 58 && temp <= 64) {
            spcs = 1
        }
    }
    ucs = upcs
    smcs = smlcs
    ing = ingr
    scs = spcs
    sum = ucs + smcs + ing + scs

    if (elmnt.length == 0) {
        stnth.style.display = "none"
    }
    else {
        stnth.style.display = "block"
        if ((elmnt.length < 2) || (elmnt.length < 2 && sum == 4)) {
            stnth.innerHTML = "Strength:weak";
            stnth.style.color = "red";
        }
        if (elmnt.length <= 4 && sum >= 1) {
            stnth.innerHTML = "Strength:weak";
            stnth.style.color = "red";
        }
        if (elmnt.length >= 5 && sum >= 2) {
            stnth.innerHTML = "Strength:Average";
            stnth.style.color = "skyblue";
        }
        if (elmnt.length >= 6 && sum >= 3) {
            stnth.innerHTML = "Strength:Good";
            stnth.style.color = "blue";
        }
        if (elmnt.length >= 8 && sum == 4) {
            stnth.innerHTML = "Strength:Strong";
            stnth.style.color = "green";
        }
    }
});
