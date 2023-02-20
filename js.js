

var cnt = 0;
setInterval(
    function () {
        if (document.getElementById("im1").className == 'carousel-item active' && cnt != 1) {
            document.getElementById("artNr1").style.color = "black";
            document.getElementById("artNr3").style.color = "black";
            setTimeout(fuchs, 250)
            setTimeout(resetCol, 500);
            cnt = 1;

        }
        else if (document.getElementById("im2").className == "carousel-item active" && cnt != 2) {
            document.getElementById("artNr1").style.color = "black";
            document.getElementById("artNr3").style.color = "black";
            setTimeout(elefant, 250)
            setTimeout(resetCol, 500);

            cnt = 2;
        }
        else if (document.getElementById("im3").className == "carousel-item active" && cnt != 3) {
            document.getElementById("artNr1").style.color = "black";
            document.getElementById("artNr3").style.color = "black";
            setTimeout(eule, 250)
            setTimeout(resetCol, 500);

            cnt = 3;
        }
    }, 250);

function fuchs() {
    document.getElementById("artNr1").innerHTML = "Fuchs";
    document.getElementById("artNr3").innerHTML = "Cute robotic fox flying in Space playing with an Key painted in Oil expressive";
}
function eule() {

    document.getElementById("artNr1").innerHTML = 'Eule';
    document.getElementById("artNr3").innerHTML = "a stern-looking owl dressed as a librarian flying trough space, digital art";
}
function elefant() {

    document.getElementById("artNr1").innerHTML = 'Elefant';
    document.getElementById("artNr3").innerHTML = "elephant dressed as a machanic flying trough space, digital art";
}

function resetCol() {
    document.getElementById("artNr1").style.color = "white";
    document.getElementById("artNr3").style.color = "white";
} 
