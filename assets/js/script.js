
// Variable
const start = document.getElementById('start-btn');
const rules = document.getElementById('quiz-rules');
const noRules = document.getElementById('close-rules');
const questionContainer = document.getElementById('question-container');
const quizIntroduction = document.getElementById('quiz-header');
const questionQuiz = document.getElementById('questions-quiz');
const answerButton = document.getElementById('answer-btn');
const nextButton = document.getElementById('next-btn');
const questions = [
    {
        question: 'What is the Romanian capital?',
        answers: [
            { text: 'Alba-Iulia', correct: false },
            { text: 'Constanta', correct: false },
            { text: 'Brasov', correct: false },
            { text: 'Bucuresti', correct: true }
        ]
    },
    {
        question: 'What is the Romanian currency?',
        answers: [
            { text: 'Leu', correct: true },
            { text: 'Lev', correct: false },
            { text: 'Romanian franc', correct: false },
            { text: 'Euro', correct: false }
        ]
    },
    {
        question: 'What are the colors appearing on the Romanian flag?',
        answers: [
            { text: 'Red, white and green', correct: false },
            { text: 'Red, yellow and blue', correct: true },
            { text: 'Red, white and blue', correct: false },
            { text: 'Green, yellow and blue', correct: false }
        ]
    },
    {
        question: 'Where do you go if you are in Romania and you want to go to the seaside?',
        answers: [
            { text: 'Red Sea', correct: false },
            { text: 'Yellow Sea', correct: false },
            { text: 'Black Sea', correct: true },
            { text: 'White Sea', correct: false }
        ]
    },
    {
        question: 'What is the biggest river bordering Romania?',
        answers: [
            { text: 'Vltava', correct: false },
            { text: 'Danube', correct: true },
            { text: 'Volga', correct: false },
            { text: 'Olt', correct: false }
        ]
    },
    {
        question: 'What are the highest mountains in Romania?',
        answers: [
            { text: 'Alps', correct: false },
            { text: 'Romanian Andes', correct: false },
            { text: 'Himalaya', correct: false },
            { text: 'Carpathians', correct: true }
        ]
    },
    {
        question: 'What is Romania code on the internet?',
        answers: [
            { text: '.rm', correct: false },
            { text: '.ra', correct: false },
            { text: '.ro', correct: true },
            { text: '.rr', correct: false }
        ]
    },
    {
        question: 'Which of the following countries is NOT a neighbour of Romania?',
        answers: [
            { text: 'Moldova', correct: false },
            { text: 'Russia', correct: true },
            { text: 'Hungary', correct: false },
            { text: 'Bulgaria', correct: false }
        ]
    },
    {
        question: 'Which of the following climates is the Romanian one?',
        answers: [
            { text: 'Temperate', correct: true },
            { text: 'Tropical', correct: false },
            { text: 'Mediterranean', correct: false },
            { text: 'Polar', correct: false }
        ]
    },
    {
        question: 'What is the highest peak in Romania?',
        answers: [
            { text: 'Tatra', correct: false },
            { text: 'Negoiu', correct: false },
            { text: 'Moldoveanu', correct: true },
            { text: 'Rodna', correct: false }
        ]
    }
];

let shuffledQuestions, currentQuestionIndex;


//event listeners 
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
    //shuffled - function from Web Dev Simplified
    shuffledQuestions = questions.sort(() => Math.random - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}
//Function set the nex question
function setNextQuestion() {
    // function from Web Dev Simplified
    resetState();
    appearQuestion(shuffledQuestions[currentQuestionIndex]);

}
// function from Web Dev Simplified
function appearQuestion(question) {
    questionQuiz.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild
            (answerButton.firstChild);
    }
}

function selectAnswer() {

}

//Function Answert
function chooseAnswer() {

}