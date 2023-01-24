//var
var secs

var question1 = [{
    id: 1,
    titles: "How do you call a Function?",
    answers: "This is wrong", "it is wrong", "is wrong"
}
    , {
    id: 2,
    titles: "How do you call a Function2?",
    answers: "worag2", "woang2", "worg2"
}
    ,
{
    id: 3,
    titles: "How do you call a Function3?",
    answers: "wrogn3", "wrwaf3", "wrsdaf3"
}
]
//var list = []
//list.push(question1, question2, question3);
//console.log(list)

//var
document.getElementById("demo").innerHTML =


    function rightQuestion() {
        for ()

}










//listerers

document.getElementById("start quiz").addEventListener("click", startGame);

//listerers




//timer
function timer() {
    document.getElementById("wrong").addEventListener("click", wrongChoice);
    var secs = 59;
    var countDown = setInterval(function () {
        document.getElementById("time-number").innerHTML = secs;
        secs--;
        if (secs < 0) {
            clearInterval(secs);
            document.getElementById("time-number").innerHTML = "Done";
        }
    }, 1000)
    function wrongChoice() {
        console.log("hello")
        secs -= 10
    }

}



//timer


function startGame() {
    var x = document.getElementById("home-page");
    x.style.display = "none";
    var y = document.getElementById("one-page");
    y.style.display = "block";
    timer()

}

function pageSwap() {

}