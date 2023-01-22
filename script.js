document.getElementById("start quiz").addEventListener("click", startGame);

//timer


function timer() {
    var secs = 59;
    var countDown = setInterval(function () {
        document.getElementById("time-number").innerHTML = secs;
        secs--;
        if (secs < 0) {
            clearInterval(secs);
            document.getElementById("time-number").innerHTML = "Done";
        }
    }, 1000)
}

timer()
//timer

function startGame() {

    var x = document.getElementById("home-page");
    x.style.display = "none";
    var y = document.getElementById("one-page");
    y.style.display = "block";

}