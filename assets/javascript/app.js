// Global Variables
var number = 5;
var intervalId;

// When timer is up run function to check which answers are correct and populate above// Another option is to check if on selection determine if answers are correct

// on page load start button
// array of objects for question, answer to check when timer completes, answer options

// create a function to check answer to user selection to calculate score
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

$("#startBtn").on("click", function () {
    // event.preventDefault();
    $(".start").empty();
    run();
    renderQuestions();

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

function calculateScore() {
    for (var i = 0; i < questions.length; i++) {
        var userInput = ($(`input[name='question-${i}']:checked`).val())
        console.log(userInput);

    }
}

// once answer is retrieved compare it to array of objects answer by index number. if correct then add to correct count if incorrect add it to incorrect count if userAnswer is undefined then add it to unanswered count.