//var
var secs

var questions = [{
    id: 1,
    titles: "How do you call a Function?",
    answers: ["This is wrong a", "it is wrong b", "is wrong c "],
    right: 123
}
    , {
    id: 2,
    titles: "How do you call a Function2?",
    answers: ["worag2a", "woang2b", "worg2c"],
    right: 113
}
    ,
{
    id: 3,
    titles: "How do you call a Function3?",
    answers: ["wrogn3a", "wrwaf3b", "wrsdaf3c"],
    right: 111
}
]
//var list = []
//list.push(question1, question2, question3);
//console.log(list)

//var




function rightQuestion() {
    for (var i = 0; i < questions.length; i++) {
        document.getElementById("wrong1").innerHTML = questions[i].answers[0]
        document.getElementById("wrong2").innerHTML = questions[i].answers[1]
        document.getElementById("wrong3").innerHTML = questions[i].answers[2]
        document.getElementById("title").innerHTML = questions[i].titles
        document.getElementById("right").innerHTML = questions[i].right
    }
}




//listerers

document.getElementById("start quiz").addEventListener("click", startGame);
document.getElementById("right").addEventListener("click", rightQuestion);


//listerers




//timer
function timer() {
    document.getElementById("wrong1", "wrong2", "wrong3").addEventListener("click", wrongChoice);
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
    var y = document.getElementById("page");
    y.style.display = "block";
    timer()

}

