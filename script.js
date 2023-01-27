//var
var secs = 59
var score = 0
var nameInput = $("#name")
let form = document.querySelector('form');
//var

//listerers

document.getElementById("start quiz").addEventListener("click", startGame);
//listerers
/*
     var userAnswer = this.getAttribute("data-value");
     if (userAnswer === questions.answers[questions.right]) { console.log("right") } else { console.log("wrong") }
 })

$("#choice0,#choice1,#choice2 choice3").click(function () {
    var userAnswer = e.target.innerHTML;
    console.log(userAnswer);
    if (userAnswer === questions[0].right) { console.log("right") } else { console.log("wrong") }
})
//choose the right answer
function rightQuestion() {
    for (var i = 0; i < questions.length; i++) {
        var random = Math.floor(Math.random() * questions[i].answers.length)
        {
            // checks the question

            $("#choice0,#choice1,#choice2,#choice3").click(function (e) {
                console.log(e.target)
                //get the user answer
                // checks the question
                if (userAnswer === true) {
                    document.getElementById("choice0").innerText = questions[i].answers[0]
                    document.getElementById("choice1").innerText = questions[i].answers[1]
                    document.getElementById("choice2").innerText = questions[i].answers[2]
                    document.getElementById("choice3").innerText = questions[i].right
                    document.getElementById("title").innerText = questions[i].titles
                    //    } else {
                    //          console.log("wrong")
                }
            })
        }
    }
}
//choose the right answer

*/



//timer
function timer() {
    var countDown = setInterval(function () {
        document.getElementById("time-number").innerHTML = secs;
        secs--;
        if (secs < 0) {
            clearInterval(secs);
            document.getElementById("time-number").innerHTML = "Done";
            document.location.reload()
        }
    }, 1000)
}
//timer
$(".answers").click(function () {
    var answer = $(this).attr("data-value")
    if (answer === 'right') {
        score++
        document.getElementById("footer").innerHTML = "right!"
    } else {
        secs -= 10
        document.getElementById("footer").innerHTML = "wrong!"
    }
})



form.addEventListener('submit', (event) => {
    event.preventDefault()
    let name = nameInput.val();
    console.log(name)
    window.localStorage.setItem('names', name);
    console.log(localStorage)
})

function getHighscore() {
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    var name = window.localStorage.getItem("names")
    highscores.push({
        score: score,
        name: name
    })

    window.localStorage.setItem('highscores', JSON.stringify(highscores));
    for (var i = 0; i < highscores.length; i++) {
        var scoreList = document.createElement('li');
        scoreList.textContent = /* score stuff */
            $('#highscore-list').append('<li>', highscores[i].name + " " + highscores[i].score, '<li>')
    }
}
// the game
function startGame() {
    score = 0
    var x = document.getElementById("home-page");
    x.style.display = "none";
    var y = document.getElementById("one-page");
    y.style.display = "block";
    var z = document.getElementById("hide-footer");
    z.style.display = "block";

    timer()
}
// the game
$("#right0,#choice0,#choice1,#choice2").click(function () {
    var x = document.getElementById("one-page");
    x.style.display = "none";
    var y = document.getElementById("two-page");
    y.style.display = "block";
})

$("#right1,#choice4,#choice5,#choice6").click(function () {
    var x = document.getElementById("two-page");
    x.style.display = "none";
    var y = document.getElementById("three-page");
    y.style.display = "block";
})

$("#right2,#choice4,#choice5,#choice6").click(function () {
    var x = document.getElementById("three-page");
    x.style.display = "none";
    var y = document.getElementById("four-page");
    y.style.display = "block";
})
$("#right3,#choice7,#choice8,#choice9").click(function () {
    var x = document.getElementById("four-page");
    x.style.display = "none";
    var y = document.getElementById("five-page");
    y.style.display = "block";

})
$("#right4,#choice10,#choice11,#choice12").click(function () {
    var x = document.getElementById("five-page");
    x.style.display = "none";
    var z = document.getElementById("hide-footer");
    z.style.display = "none";
    var y = document.getElementById("winning-page");
    y.style.display = "block";
})

$("#continue").click(function () {
    var x = document.getElementById("winning-page");
    x.style.display = "none";
    var y = document.getElementById("highscore-page");
    y.style.display = "block";
    getHighscore()
})
$("#play-again").click(function () {
    window.location.reload();
})


