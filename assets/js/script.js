
// Variable
const start = document.getElementById('start-btn');
const rules = document.getElementById('quiz-rules');
const noRules = document.getElementById('close-rules');
const questionContainer = document.getElementById('question-container');
const quizIntroduction = document.getElementById('quiz-header');
//event listeners fot Start Button, 

rules.addEventListener('click', showRules);
noRules.addEventListener('click', hideRules);
start.addEventListener('click', startQuiz);

// Function Show Rules
function showRules() {
    document.getElementById('quiz-instruction').style.display = 'block';
}

// Function Hide Rules
function hideRules() {
    document.getElementById('quiz-instruction').style.display = 'none';
}

// Function start the quiz
function startQuiz() {
    start.classList.add('hide');
    questionContainer.classList.remove('hide');
    quizIntroduction.classList.add('hide');
}
//Function set the nex question
function setNextQuestion() {

}

//Function Answert
function chooseAnswer() {

}