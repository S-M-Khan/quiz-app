let quizQuestions = [
    {
        question: "How many data types does Javascript support?",
        option1: "6",
        option2: "7",
        option3: "8",
        correct: "option3"
    },

    {
        question: "Which of the following is true about Javascript?",
        option1: "It is case sensitive",
        option2: "It is strongly typed",
        option3: "It can modify source HTML",
        correct: "option1"
    },

    {
        question: "Which of the following is true about Javascript?",
        option1: "Global variables can be modified by functions",
        option2: "Function Declarations cannot be called before they are declared",
        option3: "NaN is not a falsy value",
        correct: "option1"
    },

    {
        question: "What is the result of typeof(NaN)",
        option1: "NaN",
        option2: "Number",
        option3: "Undefined",
        correct: "option2"
    }
];

let quiz = document.getElementById("quiz");
let answers = document.querySelectorAll(".option");
let question = document.getElementById("question");
let first_option = document.getElementById("first_option");
let second_option = document.getElementById("second_option");
let third_option = document.getElementById("third_option");
let submitButton = document.getElementById("submit-button");

let currentQuiz = 0;
let userScore = 0;

displayQuiz();

function displayQuiz() {

    deselectOptions();

    let quiz_info = quizQuestions[currentQuiz];
    question.textContent = quiz_info.question;
    first_option.textContent = quiz_info.option1;
    second_option.textContent = quiz_info.option2;
    third_option.textContent = quiz_info.option3;
}

function deselectOptions() {
    answers.forEach(deselect => deselect.checked = false)
}

function getSelected() {
    let user_answer;
    answers.forEach(option => {
        if(option.checked) {
            user_answer = option.id
        }
    });

    return user_answer;
}

submitButton.addEventListener('click',() => {
    let selected = getSelected();
    if(selected === quizQuestions[currentQuiz].correct) {
        userScore++;
    }

    currentQuiz++;

    if(currentQuiz < quizQuestions.length){
        displayQuiz();
    }

    else {
        quiz.innerHTML = `<p>Your answered ${userScore}/${quizQuestions.length} correctly.</p>
        <button onclick = "location.reload()" class = "my-6 px-6 py-2 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-600">Retake Quiz</button>`
    }
})