var pasvord = prompt("enter your pass vord")
var confirmp = prompt("confirm your pass vord")
var clik = document.getElementById("clik")
var clic = document.getElementById("clic")

function cluc() {
    if (pasvord == confirmp) {
        clic.innerText = "You confirmed sucsesfully"
    } else{
        clic.innerText = "You cant confirmed"
    }
}
