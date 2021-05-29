let passwordField = document.getElementById("password");
let passwordButton = document.getElementById("ok");
let inputs = document.querySelectorAll("input[type='checkbox'], input[type='range'], #launch");

passwordButton.addEventListener("click", () => {
    if (passwordField.value === "TrustNo1") {
        inputs.forEach(input => input.disabled = false);
        passwordField.disabled = true;
        passwordButton.disabled = true;
    }
});

document.getElementById("launchButton").addEventListener("click", function () {
    let enginePower = setInterval(liftoff, 50);
    setTimeout(function () {
        clearInterval(enginePower);
    }, 2000);
});

function launch () {

    if (checkIsChecked() && checkIsSliderMax()) {
        let u = document.querySelector("#launchButton");
        u.disabled = false;
    }
}


function checkIsChecked() {
    let check = document.querySelectorAll(".check");
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked !== true) {
            return false;
        }
    }
    return true;
}

function checkIsSliderMax() {
    let slider = document.querySelectorAll(".slider");
    for (let i = 0; i < slider.length; i++) {
        if (slider[i].value !== 100) {
            return false;
        }
    }
    return true;
}

function liftoff() {
    let element = document.getElementById("rocket");
    let x = Number(getComputedStyle(element).left.substr(0, getComputedStyle(element).left.length - 2));
    let y = Number(getComputedStyle(element).top.substr(0, getComputedStyle(element).top.length - 2));

    element.style.left = 10 + x + "%";
    element.style.top = y - 12 + "%";
}