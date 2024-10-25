import { quizQuestions } from "./questions.js";
import { saveUserName } from "./utils.js";
let score = 0;
let currentQuestion = 0;

const quizContainer = document.querySelector("#quiz-container");
const startQuiz = document.querySelector("#start-quiz")
const nextQuestionButton = document.querySelector("#next-question")
const name = document.querySelector("#name")
const form = document.querySelector("form")

const welcomeMessage = document.querySelector("#welcome-message")



console.log(quizQuestions);

function displayQuestion() {
quizQuestions.forEach((question, index) => {
    const quizContainer = document.querySelector("#quiz-container");
    quizContainer.innerHTML = `<h3>${question.question}</h3>
    ${question.answers.map((answer, index) =>{
        return `<label>
            <input type="radio" name="answer-${index+1}" value="${answer}">
            ${answer}
        </label><br>`;
    }).join(" ")}
    `
})
}

startQuiz.addEventListener("click", (e)=>{
    e.preventDefault()
    saveUserName(name.value)
    localStorage.setItem("userName", name.value)
    form.style.display = "none"
    welcomeMessage.innerHTML = `Welcome ${name.value}`
    welcomeMessage.style.display = "block"
    quizContainer.style.display = "block"
    nextQuestionButton.style.display = "block"  
    displayQuestion()

})

nextQuestionButton.addEventListener("click", ()=>{
    currentQuestion++;
    if(currentQuestion < quizQuestions.length){
        displayQuestion()
    }else{
        clearInterval(timer)
        showResults()
    }
});

displayQuestion()

// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const nextButton = document.getElementById('next-question');
// const submitButton = document.getElementById('submit');
// const startButton = document.getElementById('start-quiz');
// const userDetailsSection = document.getElementById('user-details');
// const quizSection = document.getElementById('quiz-section');
// const timerDisplay = document.getElementById('time');

// let currentQuestionIndex = 0;
// let userScore = 0;
// let totalTime = 300; // Total quiz time in seconds (5 minutes)
// let timer;

// startButton.addEventListener('click', () => {
//     const userName = document.getElementById('name').value;

//     if (!userName) {
//         throw new Error("Please enter your name and email to start the quiz.")
//     }

//     userDetailsSection.style.display = 'none';
//     quizSection.style.display = 'block';

//     startTimer();
//     showQuestion(currentQuestionIndex);
// });

// function startTimer() {
//     timer = setInterval(() => {
//         totalTime--;
//         let minutes = Math.floor(totalTime / 60);
//         let seconds = totalTime % 60;
//         seconds = seconds < 10 ? '0' + seconds : seconds;
//         timerDisplay.textContent = `${minutes}:${seconds}`;

//         if (totalTime <= 0) {
//             clearInterval(timer);
//             alert("Time is up! Submitting your quiz.");
//             submitQuiz();
//         }
//     }, 1000);
// }

// function showQuestion(questionIndex) {
//     const currentQuestion = quizQuestions[questionIndex];
//     const answers = [];

//     for (let letter in currentQuestion.answers) {
//         answers.push(
//             `<label>
//                 <input type="radio" name="question${questionIndex}" value="${letter}">
//                 ${letter}: ${currentQuestion.answers[letter]}
//             </label>`
//         );
//     }

//     quizContainer.innerHTML = `
//         <div class="question">${currentQuestion.question}</div>
//         <div class="answers">${answers.join('')}</div>
//     `;

//     nextButton.style.display = questionIndex < quizQuestions.length - 1 ? 'inline-block' : 'none';
//     submitButton.style.display = questionIndex === quizQuestions.length - 1 ? 'inline-block' : 'none';
// }

// nextButton.addEventListener('click', () => {
//     const userAnswer = getSelectedAnswer(currentQuestionIndex);
//     if (!userAnswer) {
//         alert("Please select an answer.");
//         return;
//     }

//     if (userAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
//         userScore++;
//     }

//     currentQuestionIndex++;
//     showQuestion(currentQuestionIndex);
// });

// submitButton.addEventListener('click', submitQuiz);

// function submitQuiz() {
//     clearInterval(timer);
//     const userAnswer = getSelectedAnswer(currentQuestionIndex);
//     if (userAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
//         userScore++;
//     }
//     quizContainer.innerHTML = "";
//     resultsContainer.innerHTML = `You scored ${userScore} out of ${quizQuestions.length}`;
// }

// function getSelectedAnswer(questionIndex) {
//     const answerContainer = quizContainer.querySelector('.answers');
//     const selector = `input[name=question${questionIndex}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;
//     return userAnswer;
// }

// module.exports = { startTimer, submitQuiz, getSelectedAnswer }; // for testing
