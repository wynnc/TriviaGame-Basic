// Global Variables
var number = 20;
var intervalId;
var correctAnswer = 0;
var incorrectAnwer = 0;
var unanswered = 0;


// on page load start button
// array of objects for question, answer to check when timer completes, answer options


// when time expires print All Done!; correct answers; incorrect answers; unanswered
var questions = [
    {
        question: "This Hollywood actress helped create the beginnings of Bluetooth and Wifi technology?",
        answer: "Hedy Lamarr",
        options: ["Betty Davis", "Hedy Lamarr", "Betty Boop", "Rita Hayworth"]
    },
    {
        question: "2-This Hollywood actress helped create the beginnings of Bluetooth and Wifi technology?",
        answer: "Hedy Lamarr",
        options: ["Betty Davis", "Betty Boop", "Rita Hayworth", "Hedy Lamarr"]
    }
]

// create a function to check answer to user selection to calculate score
function renderQuestions() {
    $("#timeRemaining").text()
    for (var i = 0; i < questions.length; i++) {
        var newDiv = $("<div>");
        var newPar = $("<p>");
        newPar.text(questions[i].question);
        newDiv.append(newPar);
        questions[i].options.forEach(function (option) {
            newDiv.append(`<input type=radio name=question-${i} value="${option}">${option}</input>`);


        })
        $("#triviaQuestions").append(newDiv);
    }
    $("#btn").append(`<button class='btn btn-primary btn-lg' id=submitBtn>Submit</button>`);
}

// when start button is clicked call renderQuestions();
$("#startBtn").on("click", function () {
    // event.preventDefault();
    $(".start").empty();
    run();
    renderQuestions();

})

// when submit button is clicked the clear screen and calculate score.
$("#submitBtn").on("click", function () {
    alert("you clicked submit");
    calculateScore();
})

// create a function to create timer and display timer to start when user clicks starts
function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;

    $("#timeRemaining").html("<h3>Time Remaining: " + number + "</h3>");

    if (number === 0) {
        stop();
        calculateScore();
    }
}


function stop() {
    clearInterval(intervalId);
}

// When timer is up run function to check which answers are correct and populate above// Another option is to check if on selection determine if answers are correct

function calculateScore() {
    for (var i = 0; i < questions.length; i++) {
        var userInput = ($(`input[name='question-${i}']:checked`).val())
        if (userInput === questions[i].answer) {
            correctAnswer++;
        } else if (!userInput === questions[i].answer) {
            incorrectAnswer++;
        } else {
            unanswered++;
        }
        // console.log(userInput);
        // console.log(questions[i].answer);

    }

    populateScreen();
}

// clear time div, questions and print correct answers, incorrect answers and unanswered counts.
function populateScreen() {
    $("#timeRemaining").empty();
    $("#triviaQuestions").empty();
    $("#btn").empty();

    $("#allDone").html("<h3>All Done!</h3>");

    var newDiv = $("<div>");
    newDiv.attr("id", "correctAnswers");
    newDiv.text("Correct Answers: " + correctAnswer);
    $("#allDone").append(newDiv);

    $("#allDone").append(`<div id=incorrectAnswers>Incorrect Answers: ${incorrectAnwer}</div>`);
   
}

