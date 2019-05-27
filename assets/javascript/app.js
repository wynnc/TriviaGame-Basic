
// When timer is up run function to check which answers are correct and populate above// Another option is to check if on selection determine if answers are correct

// on page load start button
// array of objects for question, answer to check when timer completes, answer options
// create a timer to start when user clicks starts
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

function renderQuestions(){
    for(var i = 0; i < questions.length; i++){
       var newDiv = $("<div>");
       var newPar = $("<p>");
       newPar.text(questions[i].question);
       newDiv.append(newPar);
       questions[i].options.forEach(function(option){
           newDiv.append(`<input type=radio name=question-${i} value=${option}>${option}</input>`);


       })
       $("#triviaQuestions").append(newDiv);
    }
}

