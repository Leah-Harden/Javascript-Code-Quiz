//var
var sec

var questions = [{
    id: 1,
    titles: "How do you call a Function?",
    answers: ["This is wrong a", "right", "it is wrong b", "is wrong c "],
    right: 1
},
{
    id: 2,
    titles: "How do you call a Function2?",
    answers: ["right", "worag2a", "woang2b", "worg2c"],
    right: 0
}
    , {
    id: 3,
    titles: "How do you call a Function3?",
    answers: ["wrogn3a", "wrwaf3b", "right", "wrsdaf3c"],
    right: 2
}]
//var




function rightQuestion() {
    for (var i = 0; i < questions.length; i++) {
        var random = Math.floor(Math.random() * questions[i].answers.length)
        {
            if (random === 0) {
                document.getElementById("choice0").innerHTML = questions[i].right;
            } else {

                document.getElementById("choice0").innerHTML = questions[i].answers[0]
                document.getElementById("choice1").innerHTML = questions[i].answers[1]
                document.getElementById("choice2").innerHTML = questions[i].answers[2]
                document.getElementById("choice3").innerHTML = questions[i].right
                document.getElementById("title").innerHTML = questions[i].titles
            }
        }
    }
}



//listerers

document.getElementById("start quiz").addEventListener("click", startGame);
document.getElementById("choice3").addEventListener("click", rightQuestion);


//listerers

//timer
function timer() {
    //document.getElementById("choice0", "choice1", "choice2").addEventListener("click", wrongChoice);
    var secs = 59;
    var countDown = setInterval(function () {
        document.getElementById("time-number").innerHTML = secs;
        secs--;
        if (secs < 0) {
            clearInterval(secs);
            document.getElementById("time-number").innerHTML = "Done";
        }
    }, 1000)
    $("#choice0,#choice1,#choice2").click(wrongChoice(){
        console.log("hello"),
        secs -= 10
        })
}

//timer
function startGame() {
    var x = document.getElementById("home-page");
    x.style.display = "none";
    var y = document.getElementById("page");
    y.style.display = "block";
    timer()

}