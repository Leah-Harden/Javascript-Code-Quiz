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

//listerers

document.getElementById("start quiz").addEventListener("click", startGame);
document.getElementById("choice3").addEventListener("click", rightQuestion);


//listerers

// checks the question
$("#choice0,#choice1,#choice2 choice3").click(function () {
    var userAnswer = this.getAttribute("data-value");
    if (userAnswer === questions.answers[questions.right]) { console.log("right") } else { console.log("wrong") }
})
// checks the question

//choose the right answer
function rightQuestion() {
    for (var i = 0; i < questions.length; i++) {
        var random = Math.floor(Math.random() * questions[i].answers.length)
        {
            if (userAnswer === right) {
                document.getElementById("choice0").innerHTML = questions[i].answers[0]
                document.getElementById("choice1").innerHTML = questions[i].answers[1]
                document.getElementById("choice2").innerHTML = questions[i].answers[2]
                document.getElementById("choice3").innerHTML = questions[i].right
                document.getElementById("title").innerHTML = questions[i].titles
            } else {
                console.log("wrong")
            }
        }
    }
}
//choose the right answer





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
    $("1").click(function () {
        console.log("hello"),
            secs -= 10
    })
}

//timer

// the game
function startGame() {
    var x = document.getElementById("home-page");
    x.style.display = "none";
    var y = document.getElementById("page");
    y.style.display = "block";
    timer()

}
// the game