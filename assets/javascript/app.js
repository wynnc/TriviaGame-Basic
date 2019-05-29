// Global Variables
var number = 30;
var intervalId;
var correctAnswer = 0;
var incorrectAnswer = 0;
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
        question: "This Arkansas native relocated to Denver, started a coding bootcamp and got a programming job within six months?",
        answer: "Grace Gude",
        options: ["Grace Gude", "Maya Angelou", "Jenny Delony", " Mary Elizabeth Smith Massey"]
    },
    {
        question: "This mathematician and writer is known as the first computer programmer?",
        answer: "Ada Lovelace",
        options: ["Mary Somerville", "Emmy Noether", "Ada Lovelace", "Sophie Germain"]
    },

    {
        question: "This mathematician, educator and improve Queen is known for training the next wave of women coders?",
        answer: "Sarah Cullen",
        options: ["Mary Somerville", "Sarah Cullen", "Sofia Kovalevskaya", "Sophie Germain"]
    },
    {
        question: "This Naval officer was the first person to design a compiler for a programming language?",
        answer: "Grace Hopper",
        options: ["Grace Hopper", "Gretchen Herbert", "Roberta Hazard", "Lillian Fishburne"]
    },
    {
        question: "This Full Stack Programmer is a mother of a toddler, graduate of Galvanized and an educator for future programmers?",
        answer: "Lindsay Chapin",
        options: ["Diana Prince", "Hope Solo", "Jane Smith", "Lindsay Chapin"]
    },
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
    $("#btn").append(`<button class='btn btn-primary btn-lg' id=submitBtn onclick=submitClick();>Submit</button>`);
}

// when start button is clicked call renderQuestions();
$("#startBtn").on("click", function () {
    // event.preventDefault();
    $(".start").empty();
    run();
    renderQuestions();

})

// when submit button is clicked the clear screen and calculate score.


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
        } else if (userInput === undefined){
            unanswered++;
        } else {
            incorrectAnswer++;
        }
        // } else if (userInput !== questions[i].answer) {
          
        //     incorrectAnswer++;
        // } else {
        //     unanswered++;
        // }
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

    $("#allDone").append(`<div id=incorrectAnswers>Incorrect Answers: ${incorrectAnswer}</div>`);
    $("#allDone").append(`<div id=unanswered>Unanswered: ${unanswered}</div>`);

}

function submitClick () {
    // alert("you clicked submit");
    stop();
    // console.log("checking");
    calculateScore();
}